package org.pentaho.di.spoon.model;

/**
 * Created by bmorrise on 11/22/16.
 */
public class TransformationModel {
  private String path;
  private String name;
  private String content;

  public String getPath() {
    return path;
  }

  public void setPath( String path ) {
    this.path = path;
  }

  public String getName() {
    return name;
  }

  public void setName( String name ) {
    this.name = name;
  }

  public String getContent() {
    return content;
  }

  public void setContent( String content ) {
    this.content = content;
  }
}
