package com.revature.bookmybandrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookmybandrest.model.Request;


@Repository
public interface RequestRepository extends JpaRepository<Request, Integer>  {

}
