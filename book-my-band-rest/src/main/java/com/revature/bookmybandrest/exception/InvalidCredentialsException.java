package com.revature.bookmybandrest.exception;

public class InvalidCredentialsException extends RuntimeException {
	public InvalidCredentialsException() {
		super();
	}
	public InvalidCredentialsException(String message) {
		super(message);
	}
	public InvalidCredentialsException(Throwable cause) {
		super(cause);
	}
}