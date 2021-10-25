package com.revature.bookmybandrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookmybandrest.model.Band;

import com.revature.bookmybandrest.model.Customer;

@Repository
public interface BandRepository extends JpaRepository<Band,Integer> {
	Band findByEmail(String email);

}
