package com.revature.bookmybandrest.service;


import java.util.List;
import java.util.Optional;


import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookmybandrest.model.Band;
import com.revature.bookmybandrest.repository.BandRepository;

import com.revature.bookmybandrest.repository.CustomerRepository;

@Service
@Transactional
public class BandService {
	private static final Logger LOGGER = LoggerFactory.getLogger(BandService.class);

	
	@Autowired
	private BandRepository bandRepository;
	

	public List<Band> list()
	{
		return bandRepository.findAll();
	}
	
	public Band getById(int id)
	{
		Optional<Band> result = bandRepository.findById(id);
		return result.get();
	}
	
	public void save(Band band)
	{
		bandRepository.save(band);
	}
	
	public void delete(int id)
	{
		bandRepository.deleteById(id);
	}


	public Band getCustomerByEmail(String email) {
		return bandRepository.findByEmail(email);
		}

}
