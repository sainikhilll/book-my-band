package com.revature.bookmybandrest.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookmybandrest.model.Request;
import com.revature.bookmybandrest.repository.RequestRepository;

@Service
@Transactional

public class RequestService {
private static final Logger LOGGER = LoggerFactory.getLogger(RequestService.class);
	
	@Autowired
	private RequestRepository requestRepository;

	public List<Request> getByCustId(int custId){
		return requestRepository.findByCustId(custId);
	}


}
