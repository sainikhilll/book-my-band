package com.revature.bookmybandrest.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import com.revature.bookmybandrest.model.Request;


@Repository
public interface RequestRepository extends JpaRepository<Request,Integer> {


	@Query("from Request as r left outer join r.customer as c where r.band.id = :bandId and r.status = 'pending'" )
	List<Request> findByBandId(@Param("bandId")int bandId);
	
}


