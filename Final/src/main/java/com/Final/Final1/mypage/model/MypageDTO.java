package com.Final.Final1.mypage.model;

public class MypageDTO {
	
//	select User_code, User_id, User_pw, User_name,User_nickname,User_score,
//	User_point,commission,Phone_num,Email_address,Team_name,User_introduce,
//	User_contact1,User_contact2,User_contact3 from User where 
//	User_id=#{User_id};
	
	
	private int User_code;
	private String User_id;
	private String User_pw;
	private String User_name;
	private String User_nickname;
	private int User_score;
	private int User_point;
	private int commission;
	private String Phone_num;
	private String Email_address;
	private String Team_name;
	private String User_introduce;
	private String User_contact1;
	private String User_contact2;
	private String User_contact3;
	
	
	
	public int getUser_code() {
		return User_code;
	}
	public void setUser_code(int User_code) {
		this.User_code = User_code;
	}
	public String getUser_id() {
		return User_id;
	}
	public void setUser_id(String User_id) {
		this.User_id = User_id;
	}
	public String getUser_pw() {
		return User_pw;
	}
	public void setUser_pw(String User_pw) {
		this.User_pw = User_pw;
	}
	public String getUser_name() {
		return User_name;
	}
	public void setUser_name(String User_name) {
		this.User_name = User_name;
	}
	public String getUser_nickname() {
		return User_nickname;
	}
	public void setUser_nickname(String User_nickname) {
		this.User_nickname = User_nickname;
	}
	public int getUser_score() {
		return User_score;
	}
	public void setUser_score(int User_score) {
		this.User_score = User_score;
	}
	public int getUser_point() {
		return User_point;
	}
	public void setUser_point(int User_point) {
		this.User_point = User_point;
	}
	public int getCommission() {
		return commission;
	}
	public void setCommission(int commission) {
		this.commission = commission;
	}
	public String getPhone_num() {
		return Phone_num;
	}
	public void setPhone_num(String Phone_num) {
		this.Phone_num = Phone_num;
	}
	public String getEmail_address() {
		return Email_address;
	}
	public void setEmail_address(String Email_address) {
		this.Email_address = Email_address;
	}
	public String getTeam_name() {
		return Team_name;
	}
	public void setTeam_name(String Team_name) {
		this.Team_name = Team_name;
	}
	public String getUser_introduce() {
		return User_introduce;
	}
	public void setUser_introduce(String User_introduce) {
		this.User_introduce = User_introduce;
	}
	public String getUser_contact1() {
		return User_contact1;
	}
	public void setUser_contact1(String User_contact1) {
		this.User_contact1 = User_contact1;
	}
	public String getUser_contact2() {
		return User_contact2;
	}
	public void setUser_contact2(String User_contact2) {
		this.User_contact2 = User_contact2;
	}
	public String getUser_contact3() {
		return User_contact3;
	}
	public void setUser_contact3(String User_contact3) {
		this.User_contact3 = User_contact3;
	}
	@Override
	public String toString() {
		return "MypageDTO [User_code=" + User_code + ", User_id=" + User_id + ", User_pw=" + User_pw + ", User_name="
				+ User_name + ", User_nickname=" + User_nickname + ", User_score=" + User_score + ", User_point="
				+ User_point + ", commission=" + commission + ", Phone_num=" + Phone_num + ", Email_address="
				+ Email_address + ", Team_name=" + Team_name + ", User_introduce=" + User_introduce + ", User_contact1="
				+ User_contact1 + ", User_contact2=" + User_contact2 + ", User_contact3=" + User_contact3 + "]";
	}
	
	
	
	
	
}
