package com.revature.bookmybandrest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Request;
import com.revature.bookmybandrest.service.RequestService;


@RestController
@RequestMapping("/{requests}")
public class RequestController {
	private static final Logger LOGGER = LoggerFactory.getLogger(RequestController.class);
	
	@Autowired
	private RequestService requestService;
	
	@GetMapping
	public List<Request> getByBandId(@RequestParam("bandId") int bandId/* @RequestParam("status") String status*/){
		LOGGER.debug("Id: {}",bandId );
		//return requestService.getByBandId(bandId,status);
		return requestService.getByBandId(bandId);
	}
	
//	@PostMapping
//	public void create(@RequestBody Request request) {
//		LOGGER.debug("Request: {}",request);
//		requestService.save(request);
//	}
//	
//	@PutMapping
//	public void approve(@RequestBody Request request) {
//		LOGGER.debug("Request: {}",request);
//		requestService.save(request);
//	}
	
//	@PutMapping
//	public void updateStatus(@RequestBody Request request) {
//		LOGGER.debug("Request: {}", request);
//	}
	
	@PutMapping
	public void updateStatus(@RequestBody Request request) {
		LOGGER.debug("Request: {}",request);
		
		requestService.updateStatus(request);
	}
//	 @PostMapping
////	    @CrossOrigin(origins = "http://localhost:8080")
//	    public Request saverequest(@RequestBody Request request) {
//	    	return requestService.saverequest(request);
//	
//	    }

//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.revature.bookmybandrest.model.Request;
//import com.revature.bookmybandrest.repository.RequestRepository;
//import com.revature.bookmybandrest.service.RequestService;
//
//@RestController
//@RequestMapping("/requests")
//public class RequestController {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(RequestService.class);
//	
//	 @Autowired
//	    private RequestService requestService;
//	 
//	    
//	    @GetMapping
//	    @CrossOrigin(origins = "http://localhost:8080")
//	    public List<Request> getRequestList() {
//	        return requestService.list();
//	    }
	    @PostMapping
	   // @CrossOrigin(origins = "http://localhost:8080")
	    public Request saverequest(@RequestBody Request request) {
	    	return requestService.save(request);
	
	    }
	    }
//	
//}
