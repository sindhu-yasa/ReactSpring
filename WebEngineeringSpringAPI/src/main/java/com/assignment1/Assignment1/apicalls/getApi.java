package com.assignment1.Assignment1.apicalls;

import org.springframework.web.bind.annotation.*;
import com.assignment1.Assignment1.services.response;
import org.springframework.http.ResponseEntity;
@RestController
public class getApi {
    @GetMapping("/nasaapodapi")
	public ResponseEntity<?> getresponse(@RequestParam(value = "date", required = false) String date,
                            @RequestParam(value = "start_date", required = false) String start_date,
                            @RequestParam(value = "end_date",required = false) String end_date,
                            @RequestParam(value = "count",required = false) String count,
                            @RequestParam(value = "thumbs",required = false) String thumbs) {
        response service = new response();
        return service.getNASAPOD(date,start_date,end_date,count, thumbs);
    }
}
