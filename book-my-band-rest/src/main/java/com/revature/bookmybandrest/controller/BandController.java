package com.revature.bookmybandrest.controller;

import java.util.List;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookmybandrest.model.Band;
import com.revature.bookmybandrest.repository.BandRepository;
import com.revature.bookmybandrest.service.BandService;


@RestController
@RequestMapping("/bands")
public class BandController {

	
	@Autowired
	private BandService bandService;
	
			
	  private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	

	@GetMapping
	public List<Band> getBand() {
		return this.bandService.list();
	}

	@GetMapping("/{id}")
	public Band getBand(@PathVariable int id) {
		return bandService.getById(id);
	}

	@PostMapping
	public void create(@RequestBody Band band) {
        LOGGER.debug("{}", band.getContactNumber());
		bandService.save(band);
	}

	@PutMapping
	public void update(@RequestBody Band band) {

		bandService.save(band);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {

		bandService.delete(id);
	}


}
