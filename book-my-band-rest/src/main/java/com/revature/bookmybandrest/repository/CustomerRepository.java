package com.revature.bookmybandrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.bookmybandrest.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
