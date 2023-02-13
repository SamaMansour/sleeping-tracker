import React from "react";
import { mount } from "enzyme";
import "./EnzymeConfig";
import Register from "../../src/layouts/auth/register";


describe("signup step", function() {
  let wrapper;

  it("Enter username", function() {
    wrapper = mount(<Register />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "username", value: "user1" }
    });
    expect(wrapper.state("username")).toEqual("user1");
  });

  it("Enter email", function() {
    wrapper = mount(<Register />);
    wrapper.find('input[type="email"]').simulate("change", {
      target: { id: "email", value: "sama.mansour@pwc.com" }
    });
    expect(wrapper.state("email")).toEqual("sama.mansour@pwc.com");
  });

  it("Enter password", function() {
    wrapper = mount(<Register />);
    wrapper.find('input[type="password"]').simulate("change", {
      target: { id: "password", value: "123456" }
    });
    expect(wrapper.state("password")).toEqual("123456");
  });



});
