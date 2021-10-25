package com.revature.bookmybandrest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.repository.CustomerRepository;
import com.revature.bookmybandrest.service.CustomerService;

import com.revature.bookmybandrest.exception.InvalidCredentialsException;
import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.service.CustomerService;

//@RestController
//@RequestMapping("/customers")
//public class CustomerController {
//	
//	@Autowired
//	private CustomerService ;
//	
//	
//
//}


@RestController
@RequestMapping("/customers")
public class CustomerController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	private CustomerService customerService;
	
	@PostMapping
	public Customer registerCustomer(@RequestBody Customer customer) {
	
		LOGGER.debug("Customer {}", customer);
		String emailRecived = customer.getEmail();
		String passwordRecived = customer.getPassword();
		Customer returnedBand = customerService.getCustomerByEmail(customer.getEmail());
		LOGGER.debug("customerReturned:", returnedBand);
		if (returnedBand == null) {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		} else if (emailRecived.equals(returnedBand.getEmail()) && passwordRecived.equals(returnedBand.getPassword())) {
			return returnedBand;
		} else {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		}

	}
	
	@GetMapping
    public List<Customer> getDepartmentList() {
        return customerService.list();
    }
    
    @GetMapping("/{id}")
	public Customer getDepartment(@PathVariable int id)  {
		return customerService.getById(id);
	}
    
    @PostMapping("/addcustomers")
	public void create(@RequestBody Customer customer) {
		customerService.save(customer);
	}
    @PutMapping
  	public void update(@RequestBody Customer customer) {
  		
  		customerService.save(customer);
  	}
    @DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		
		customerService.delete(id);
	}

}

