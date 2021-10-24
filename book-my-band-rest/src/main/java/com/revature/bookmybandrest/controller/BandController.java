package com.revature.bookmybandrest.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.exception.InvalidCredentialsException;
import com.revature.bookmybandrest.model.Band;
import com.revature.bookmybandrest.service.BandService;

@RestController
@RequestMapping("/{bands}")
public class BandController {
	private static final Logger LOGGER = LoggerFactory.getLogger(BandController.class);

	@Autowired
	private BandService bandService;

	@PostMapping
	public Band customerAuthentication(@RequestBody Band band) {
		LOGGER.debug("Band {}", band);
		String emailRecived = band.getEmail();
		String passwordRecived = band.getPassword();
		Band returnedBand = bandService.getCustomerByEmail(band.getEmail());
		LOGGER.debug("customerReturned:", returnedBand);
		if (returnedBand == null) {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		} else if (emailRecived.equals(returnedBand.getEmail()) && passwordRecived.equals(returnedBand.getPassword())) {
			return returnedBand;
		} else {
			throw new InvalidCredentialsException("Enter Valid Credntials");
		}

	}
}
