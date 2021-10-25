package com.revature.bookmybandrest.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "request")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "date")
	private Date date;

	@Column(name = "hours")
	private int hours;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "status")
	private String status;

	 @ManyToOne
	    @JoinColumn(name="band_id")
		private Band band;
	 @ManyToOne @JoinColumn(name="cust_id")
		private Customer customer;
	 }



