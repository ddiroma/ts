package org.pentaho.di.spoon.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bmorrise on 11/22/16.
 */
public class PreviewModel {

  private String[] fieldNames;
  private List<List<String>> data = new ArrayList<>();

  public String[] getFieldNames() {
    return fieldNames;
  }

  public void setFieldNames( String[] fileNames ) {
    this.fieldNames = fileNames;
  }

  public List<List<String>> getData() {
    return data;
  }

  public void setData( List<List<String>> data ) {
    this.data = data;
  }
}
