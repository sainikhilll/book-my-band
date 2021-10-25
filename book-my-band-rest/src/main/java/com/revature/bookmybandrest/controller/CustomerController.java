package com.revature.bookmybandrest.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.exception.InvalidCredentialsException;
import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.service.CustomerService;

@RestController
@RequestMapping("/{customers}")
public class CustomerController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	private CustomerService service;
	
	@PostMapping
	public Customer registerCustomer(@RequestBody Customer customer) {
	
		LOGGER.debug("Customer {}", customer);
		String emailRecived = customer.getEmail();
		String passwordRecived = customer.getPassword();
		Customer returnedBand = service.getCustomerByEmail(customer.getEmail());
		LOGGER.debug("customerReturned:", returnedBand);
		if (returnedBand == null) {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		} else if (emailRecived.equals(returnedBand.getEmail()) && passwordRecived.equals(returnedBand.getPassword())) {
			return returnedBand;
		} else {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		}

	}
}
