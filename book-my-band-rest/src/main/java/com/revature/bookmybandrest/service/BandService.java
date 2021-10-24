package com.revature.bookmybandrest.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookmybandrest.model.Band;
import com.revature.bookmybandrest.repository.BandRepository;

@Service
@Transactional
public class BandService {
	private static final Logger LOGGER = LoggerFactory.getLogger(BandService.class);
	
	@Autowired
	private BandRepository bandRepository;
	
	public Band getCustomerByEmail(String email) {
		return bandRepository.findByEmail(email);
		}
}
