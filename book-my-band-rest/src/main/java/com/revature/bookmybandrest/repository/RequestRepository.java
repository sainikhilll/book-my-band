package com.revature.bookmybandrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.bookmybandrest.model.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request,Integer> {

//	List<Request> findByBandId(int bandId, String status);
	@Query("select r from Request r where r.bandId = :bandId and r.status = 'pending'" )
	List<Request> findByBandId(@Param("bandId")int bandId);
	 //void updateStatus(Request request);
	
}
