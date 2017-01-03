package org.pentaho.di.spoon.model;

/**
 * Created by bmorrise on 11/22/16.
 */
public class RunModel {
  private String stepName;
  private String path;

  public String getStepName() {
    return stepName;
  }

  public void setStepName( String stepName ) {
    this.stepName = stepName;
  }

  public String getPath() {
    return path;
  }

  public void setPath( String path ) {
    this.path = path;
  }
}
