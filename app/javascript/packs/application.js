// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bulma"

const images = require.context('../images', true)
//const imagePath = (name) => images(name, true)
//import devise from "./images/devise.png"
//import 'images'

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', ()=> {
	console.log('Hello JS!');

	//Legacy jQuery way: no jQuery
	//$(".navbar-burger").click(function() {
	//// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	//$(".navbar-burger").toggleClass("is-active");
	//$(".navbar-menu").toggleClass("is-active");
	//});
	
	// VanillaJS : Current way
	// Make sure we have access to an array element to use the forEach
	(document.querySelectorAll('.navbar-burger') || []).forEach(($e) => {
		$e.addEventListener('click', ()=> {
			$e.classList.toggle('is-active')
			//Note we are literally just finding the specific elements to add 'is-active' to perform transformation and make visible
			document.getElementById('navbarMenu').classList.toggle('is-active')
		})
	});


	// Dismiss Bulma notification Vanilla JS
	(document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
		const $notification = $delete.parentNode;

		$delete.addEventListener('click', () => {
			$notification.parentNode.removeChild($notification);
		});
	});

}); 
