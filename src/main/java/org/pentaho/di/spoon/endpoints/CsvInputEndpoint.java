package org.pentaho.di.spoon.endpoints;

import org.apache.commons.vfs2.FileObject;
import org.apache.commons.vfs2.provider.local.LocalFile;
import org.pentaho.di.core.Const;
import org.pentaho.di.core.exception.KettleException;
import org.pentaho.di.core.logging.LogChannel;
import org.pentaho.di.core.logging.LogChannelInterface;
import org.pentaho.di.core.util.Utils;
import org.pentaho.di.core.vfs.KettleVFS;
import org.pentaho.di.spoon.model.CsvInputModel;
import org.pentaho.di.trans.steps.csvinput.CsvInput;
import org.pentaho.di.trans.steps.csvinput.CsvInputMeta;
import org.pentaho.di.trans.steps.fileinput.text.EncodingType;
import org.pentaho.di.ui.core.dialog.EnterNumberDialog;
import org.pentaho.di.ui.core.dialog.EnterTextDialog;
import org.pentaho.di.ui.core.dialog.ErrorDialog;
import org.pentaho.di.ui.trans.steps.textfileinput.TextFileCSVImportProgressDialog;

import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import org.pentaho.di.trans.steps.textfileinput.TextFileInput;
import org.pentaho.di.trans.steps.textfileinput.TextFileInputMeta;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
 * Created by bmorrise on 11/28/16.
 */
@Path( "csvInput" )
public class CsvInputEndpoint {

  private LogChannelInterface log = new LogChannel( this );
//
//
//  @Path( "getFields" )
//  @Produces( { APPLICATION_JSON } )
//  @Consumes( { APPLICATION_JSON } )
//  public Response getFields( CsvInputModel csvInputModel ) {
//
//  }
//
//  // Get the data layout
//  private void getCSV( String filename, String delimiter, String enclosure, String realEncoding, String escapeCharacter, boolean isHeaderPresent ) {
//    InputStream inputStream = null;
//    try {
//      FileObject fileObject = KettleVFS.getFileObject( filename );
//      if ( !( fileObject instanceof LocalFile ) ) {
//        // We can only use NIO on local files at the moment, so that's what we
//        // limit ourselves to.
//        //
//        throw new KettleException();
//      }
//
//      inputStream = KettleVFS.getInputStream( fileObject );
//
//      InputStreamReader reader;
//      if ( Utils.isEmpty( realEncoding ) ) {
//        reader = new InputStreamReader( inputStream );
//      } else {
//        reader = new InputStreamReader( inputStream, realEncoding );
//      }
//
//      EncodingType encodingType = EncodingType.guessEncodingType( reader.getEncoding() );
//
//      // Read a line of data to determine the number of rows...
//      //
//      String line =
//        TextFileInput.getLine(
//          log, reader, encodingType, TextFileInputMeta.FILE_FORMAT_UNIX, new StringBuilder( 1000 ) );
//
//      // Split the string, header or data into parts...
//      //
//      String[] fieldNames =
//        CsvInput.guessStringsFromLine( log, line, delimiter, enclosure, escapeCharacter );
//
//      if ( !isHeaderPresent ) {
//        // Don't use field names from the header...
//        // Generate field names F1 ... F10
//        //
//        DecimalFormat df = new DecimalFormat( "000" );
//        for ( int i = 0; i < fieldNames.length; i++ ) {
//          fieldNames[i] = "Field_" + df.format( i );
//        }
//      } else {
//        if ( !Utils.isEmpty( enclosure ) ) {
//          for ( int i = 0; i < fieldNames.length; i++ ) {
//            if ( fieldNames[i].startsWith( enclosure )
//              && fieldNames[i].endsWith( enclosure ) && fieldNames[i].length() > 1 ) {
//              fieldNames[i] = fieldNames[i].substring( 1, fieldNames[i].length() - 1 );
//            }
//          }
//        }
//      }
//
//      // Trim the names to make sure...
//      //
//      for ( int i = 0; i < fieldNames.length; i++ ) {
//        fieldNames[i] = Const.trim( fieldNames[i] );
//      }
//
//      // Update the GUI
//      //
//      for ( int i = 0; i < fieldNames.length; i++ ) {
//        TableItem item = new TableItem( wFields.table, SWT.NONE );
//        item.setText( 1, fieldNames[i] );
//        item.setText( 2, ValueMeta.getTypeDesc( ValueMetaInterface.TYPE_STRING ) );
//      }
//      wFields.removeEmptyRows();
//      wFields.setRowNums();
//      wFields.optWidth( true );
//
//      // Now we can continue reading the rows of data and we can guess the
//      // Sample a few lines to determine the correct type of the fields...
//      //
//      String shellText = BaseMessages.getString( PKG, "CsvInputDialog.LinesToSample.DialogTitle" );
//      String lineText = BaseMessages.getString( PKG, "CsvInputDialog.LinesToSample.DialogMessage" );
//      EnterNumberDialog end = new EnterNumberDialog( shell, 100, shellText, lineText );
//      int samples = end.open();
//      if ( samples >= 0 ) {
//        getInfo( meta );
//
//        TextFileCSVImportProgressDialog pd =
//          new TextFileCSVImportProgressDialog( shell, meta, transMeta, reader, samples, true );
//        String message = pd.open();
//        if ( message != null ) {
//          wFields.removeAll();
//
//          // OK, what's the result of our search?
//          getData( meta, false );
//          wFields.removeEmptyRows();
//          wFields.setRowNums();
//          wFields.optWidth( true );
//
//          EnterTextDialog etd =
//            new EnterTextDialog(
//              shell, BaseMessages.getString( PKG, "CsvInputDialog.ScanResults.DialogTitle" ), BaseMessages
//              .getString( PKG, "CsvInputDialog.ScanResults.DialogMessage" ), message, true );
//          etd.setReadOnly();
//          etd.open();
//
//          // asyncUpdatePreview();
//        }
//      }
//    } catch ( IOException e ) {
//      new ErrorDialog( shell, BaseMessages.getString( PKG, "CsvInputDialog.IOError.DialogTitle" ), BaseMessages
//        .getString( PKG, "CsvInputDialog.IOError.DialogMessage" ), e );
//    } catch ( KettleException e ) {
//      new ErrorDialog( shell, BaseMessages.getString( PKG, "System.Dialog.Error.Title" ), BaseMessages.getString(
//        PKG, "CsvInputDialog.ErrorGettingFileDesc.DialogMessage" ), e );
//    } finally {
//      try {
//        inputStream.close();
//      } catch ( Exception e ) {
//        // Ignore close errors
//      }
//    }
//  }

}
