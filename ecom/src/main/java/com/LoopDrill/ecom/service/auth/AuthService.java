package com.LoopDrill.ecom.service.auth;

import com.LoopDrill.ecom.dto.SignupRequest;
import com.LoopDrill.ecom.dto.UserDto;

public interface AuthService {
	UserDto createUser(SignupRequest signupRequest);
	
	Boolean hasUserWithEmail(String email);
}