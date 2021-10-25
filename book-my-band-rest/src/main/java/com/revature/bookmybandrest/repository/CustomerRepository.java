package com.revature.bookmybandrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.revature.bookmybandrest.model.Customer;


import org.springframework.stereotype.Repository;

import com.revature.bookmybandrest.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	Customer findByEmail(String email);

}
