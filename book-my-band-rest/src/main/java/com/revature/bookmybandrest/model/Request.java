package com.revature.bookmybandrest.model;

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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="request")
public class Request {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "hours")
	private int hours;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "status")
	private String status;
	
//	@Column(name = "band_id")
//	private int bandId;
//	
//	@Column(name = "cust_id")
//	private int custId;
	 @ManyToOne
	    @JoinColumn(name="band_id")
		private Band band;
	 @ManyToOne
	    @JoinColumn(name="cust_id")
		private Customer customer;
	 
	
//	public int getCustId() {
//		return custId;
//	}
//	public void setCustId(int custId) {
//		this.custId = custId;
//	}
//	public String getDate() {
//		return date;
//	}
//	public void setDate(String date) {
//		this.date = date;
//	}
//	public int getHours() {
//		return hours;
//	}
//	public void setHours(int hours) {
//		this.hours = hours;
//	}
//	public String getCity() {
//		return city;
//	}
//	public void setCity(String city) {
//		this.city = city;
//	}
//	public String getStatus() {
//		return status;
//	}
//	public void setStatus(String status) {
//		this.status = status;
//	}
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public int getBandId() {
//		return bandId;
//	}
//	public void setBandId(int bandId) {
//		this.bandId = bandId;
//	}
//	@Override
//	public String toString() {
//		return "Request [id=" + id + ", date=" + date + ", hours=" + hours + ", city=" + city + ", status=" + status
//				+ ", bandId=" + bandId + ", custId=" + custId + "]";
//	}
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + bandId;
//		result = prime * result + ((city == null) ? 0 : city.hashCode());
//		result = prime * result + custId;
//		result = prime * result + ((date == null) ? 0 : date.hashCode());
//		result = prime * result + hours;
//		result = prime * result + id;
//		result = prime * result + ((status == null) ? 0 : status.hashCode());
//		return result;
//	}
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Request other = (Request) obj;
//		if (bandId != other.bandId)
//			return false;
//		if (city == null) {
//			if (other.city != null)
//				return false;
//		} else if (!city.equals(other.city))
//			return false;
//		if (custId != other.custId)
//			return false;
//		if (date == null) {
//			if (other.date != null)
//				return false;
//		} else if (!date.equals(other.date))
//			return false;
//		if (hours != other.hours)
//			return false;
//		if (id != other.id)
//			return false;
//		if (status == null) {
//			if (other.status != null)
//				return false;
//		} else if (!status.equals(other.status))
//			return false;
//		return true;
//	}
	
	
}
