package com.assignment1.Assignment1.responses;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PodResponse{
    public Boolean concept_tags;
    public String title;
    public String date;
    public String url;
    public String hdurl;
    public String media_type;
    public String explanation;
    public String thumbnail_url;
    public String copyright;
    public String service_version;
}