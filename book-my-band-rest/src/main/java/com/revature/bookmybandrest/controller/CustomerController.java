package com.revature.bookmybandrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Customer;
import com.revature.bookmybandrest.repository.CustomerRepository;
import com.revature.bookmybandrest.service.CustomerService;


@RestController
@RequestMapping("/customers")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping
    public List<Customer> getDepartmentList() {
        return customerService.list();
    }
    
    @GetMapping("/{id}")
	public Customer getDepartment(@PathVariable int id)  {
		return customerService.getById(id);
	}
    
    @PostMapping
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