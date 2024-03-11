package com.assignment1.Assignment1.services;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.assignment1.Assignment1.responses.PodResponse;

public class response {
    public ResponseEntity<?> getNASAPOD( String date,String start_date,String end_date,String count,String thumbs){
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("date", date);
        queryParams.put("start_date", start_date);
        queryParams.put("end_date", end_date);
        queryParams.put("count", count);
        queryParams.put("thumbs", thumbs);

        String baseUrl = "https://api.nasa.gov/planetary/apod?api_key=JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74";

        String queryParamsString = queryParams.entrySet().stream()
                .filter(entry -> entry.getValue() != null)
                .map(entry -> entry.getKey() + "=" + entry.getValue())
                .collect(Collectors.joining("&"));

        String url = baseUrl + (queryParamsString.isEmpty() ? "" : "&" + queryParamsString);

        RestTemplate restapicall = new RestTemplate();
        if (start_date != null || end_date != null || count != null) {
            PodResponse[] responsesArray = restapicall.getForObject(url, PodResponse[].class);
            List<PodResponse> responsesList = Arrays.asList(responsesArray);
            return ResponseEntity.ok(responsesList);
        } else {
            PodResponse response = restapicall.getForObject(url, PodResponse.class);
            return ResponseEntity.ok(response);
        }
    }
}
