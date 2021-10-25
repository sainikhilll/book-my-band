package com.revature.bookmybandrest.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.repository.CustomerRepository;

@Service
@Transactional
public class CustomerService {
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerService.class);
	
	@Autowired
	private CustomerRepository repo;
	
	public Customer getCustomerByEmail(String email) {
		return repo.findByEmail(email);
		}
	
	
}
