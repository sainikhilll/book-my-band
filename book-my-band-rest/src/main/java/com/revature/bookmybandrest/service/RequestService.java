package com.revature.bookmybandrest.service;

import java.util.List;


import javax.transaction.Transactional;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.RequestBody;

import com.revature.bookmybandrest.model.Request;
import com.revature.bookmybandrest.repository.RequestRepository;


@Service
@Transactional
public class RequestService {
	private static final Logger LOGGER = LoggerFactory.getLogger(RequestService.class);
	
	@Autowired
	private RequestRepository requestRepository;
	

	
	public List<Request> getByBandId(int bandId){
		return requestRepository.findByBandId(bandId);
	}

     public Request save(Request request) {
	    	LOGGER.debug("Start{}",request);
	    	return requestRepository.save(request);
	    }
	public void updateStatus(Request request) {
		LOGGER.debug("request: {}", request);
		
		if(requestRepository.findById(request.getId()).isPresent()) {
			Request exsistingRequest = requestRepository.findById(request.getId()).get();
			
			exsistingRequest.setStatus(request.getStatus());
			
			requestRepository.save(exsistingRequest);
		}
	}
	
}	

