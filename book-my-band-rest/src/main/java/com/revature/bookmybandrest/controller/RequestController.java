package com.revature.bookmybandrest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	@GetMapping("/customerreqs")
	public List<Request> getByCustId(@RequestParam("custId") int custId/* @RequestParam("status") String status*/){
		LOGGER.debug("Id: {}",custId );
		//return requestService.getByBandId(custId,status);
		return requestService.getByCustId(custId);
	}

}
