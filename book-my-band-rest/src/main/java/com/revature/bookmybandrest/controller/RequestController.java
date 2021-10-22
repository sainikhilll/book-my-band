package com.revature.bookmybandrest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Request;
import com.revature.bookmybandrest.repository.RequestRepository;
import com.revature.bookmybandrest.service.RequestService;

@RestController
//@RequestMapping("/requests")
public class RequestController {

	private static final Logger LOGGER = LoggerFactory.getLogger(RequestService.class);
	
	 @Autowired
	    private RequestService requestService;
	 
	    
	    @GetMapping ("/requests")
	    @CrossOrigin(origins = "http://localhost:8080")
	    public List<Request> getRequestList() {
	        return requestService.list();
	    }
	    @PostMapping ("/addrequests")
	    @CrossOrigin(origins = "http://localhost:8080")
	    public Request saverequest(@RequestBody Request request) {
	    	return requestService.saverequest(request);
	
	    }
	
}