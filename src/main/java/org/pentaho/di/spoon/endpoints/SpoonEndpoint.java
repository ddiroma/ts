package org.pentaho.di.spoon.endpoints;

import org.apache.commons.io.FileUtils;
import org.pentaho.di.core.exception.KettleException;
import org.pentaho.di.core.exception.KettleStepException;
import org.pentaho.di.core.exception.KettleValueException;
import org.pentaho.di.core.row.RowMetaInterface;
import org.pentaho.di.core.row.ValueMetaInterface;
import org.pentaho.di.spoon.model.PreviewModel;
import org.pentaho.di.spoon.model.RunModel;
import org.pentaho.di.spoon.model.TransformationModel;
import org.pentaho.di.trans.Trans;
import org.pentaho.di.trans.TransMeta;
import org.pentaho.di.trans.step.RowAdapter;
import org.pentaho.di.trans.step.StepInterface;
import org.pentaho.di.trans.step.StepMeta;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
 * Created by bmorrise on 11/22/16.
 */
public class SpoonEndpoint {

  @POST
  @Path( "/save" )
  @Consumes( { APPLICATION_JSON } )
  public Response save( TransformationModel transformationModel ) {

    File file = new File( transformationModel.getPath() );
    try {
      FileUtils.writeStringToFile( file, transformationModel.getContent(), "UTF-8" );
    } catch ( IOException ioe ) {
      return Response.serverError().build();
    }

    return Response.ok().build();
  }

  @POST
  @Path( "/run" )
  @Consumes( { APPLICATION_JSON } )
  @Produces( { APPLICATION_JSON } )
  public Response run( RunModel runModel ) {

    PreviewModel previewModel = new PreviewModel();

    try {

      List<Object[]> rowsData = new ArrayList<>();

      TransMeta transMeta = new TransMeta( runModel.getPath() );
      Trans trans = new Trans( transMeta );
      trans.prepareExecution( null );

      StepInterface resultStep = trans.findRunThread( runModel.getStepName() );
      StepMeta stepMeta = resultStep.getStepMeta();
      final RowMetaInterface rowMeta = transMeta.getStepFields( stepMeta ).clone();
      resultStep.getStepMeta();
      resultStep.addRowListener( new RowAdapter() {
        @Override public void rowWrittenEvent( RowMetaInterface rowMeta, Object[] row ) throws KettleStepException {
          try {
            rowsData.add( rowMeta.cloneRow( row ) );
          } catch ( KettleValueException e ) {
            // Do nothing yet
          }
        }
      } );

      trans.startThreads();
      trans.waitUntilFinished();

      List<List<String>> allRowValues = new ArrayList<>();
      for ( Object[] rowData : rowsData ) {
        List<String> rowValues = new ArrayList<>();
        for ( int colNr = 0; colNr < rowMeta.size(); colNr++ ) {
          String string;
          ValueMetaInterface valueMetaInterface;
          try {
            valueMetaInterface = rowMeta.getValueMeta( colNr );
            if ( valueMetaInterface.isStorageBinaryString() ) {
              Object nativeType = valueMetaInterface.convertBinaryStringToNativeType( (byte[]) rowData[colNr] );
              string = valueMetaInterface.getStorageMetadata().getString( nativeType );
            } else {
              string = rowMeta.getString( rowData, colNr );
            }
          } catch ( Exception e ) {
            string = "Conversion error: " + e.getMessage();
          }
          rowValues.add( string );
        }
        allRowValues.add( rowValues );
      }
      previewModel.setFieldNames( rowMeta.getFieldNames() );
      previewModel.setData( allRowValues );
    } catch ( KettleException e ) {
      return Response.serverError().build();
    }

    return Response.ok( previewModel ).build();
  }

}
