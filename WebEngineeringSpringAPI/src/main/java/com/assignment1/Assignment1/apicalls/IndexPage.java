package com.assignment1.Assignment1.apicalls;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexPage {
    @GetMapping(value = {"/", "/home", "/forms"})
    public String index() {
        return "index"; // This will serve index.html located in src/main/resources/templates/
    }
}
