package com.revature.bookmybandrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.service.CustomerService;

@RestController
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	@PostMapping("/registercustomers")
	public Customer registerCustomer(@RequestBody Customer customer) {
	
		String tempEmailId = customer.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			
		}
		Customer custObj = null; 
		custObj = service.saveCustomer(customer);
		return custObj;
	}
}
