package com.revature.bookmybandrest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	
	private CustomerRepository customerRepository;
	
	public List<Customer> list()
	{
		return customerRepository.findAll();
	}
	
	public Customer getById(int id)
	{
		Optional<Customer> result = customerRepository.findById(id);
		return result.get();
	}
	
	public void save(Customer customer)
	{
		customerRepository.save(customer);
	}
	
	public void delete(int id)
	{
		customerRepository.deleteById(id);
	}

}
