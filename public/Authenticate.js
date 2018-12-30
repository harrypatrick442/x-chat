var Authenticate = new (function(){
	var _Authenticate = function (params)
	{
		var callbackRegister = params.callbackRegister;
		var callbackSignIn = params.callbackSignIn;
		var callbackGuest = params.callbackGuest;
		var enablePassword = (callbackRegister != undefined);
		var self = this;
		var settings = new Settings("#username", function () {
			this.set("username");
			//this is a reset function for this particualr instance of this particular class.
		});
		var timer;
		this.div = E.DIV();
		var divInner = E.DIV();
		var divInputsSignIn = E.DIV();
		var divInputsRegister;
		var divInputsGuest = E.DIV();
		//var divTextInputs = document.createElement('div');
		var textUsername = E.TEXT();
		var textPasswordSignIn = E.PASSWORD();
		var textPasswordRegister = E.PASSWORD();
		var textPasswordReenterRegister = E.PASSWORD();
		var textEmailRegister = E.TEXT();
		var textUsernameRegister = E.TEXT();
		var textUsernameGuest = E.TEXT();
		var button = E.BUTTON();
		var buttonEnterGuest = E.BUTTON();
		var divError = E.DIV();
		var textError = E.TEXTAREA();
		var spinner = new Spinner(1);
		spinner.hide();
		this.div.classList.add('authenticate');
		divInner.classList.add('div-inner');
		divInputsSignIn.classList.add('div-inputs-sign-in');
		divInputsRegister = E.DIV();
		textUsernameGuest.className = 'form-control';
		textUsernameRegister.className='form-control';
		textEmailRegister.className='form-control';
		textPasswordReenterRegister.className='form-control';
		textPasswordRegister.className='form-control';
		textPasswordSignIn.className='form-control';
		textUsername.className='form-control';
		var birthday = new Birthday();
		var genderPicker = new GenderPicker();
		setLayoutStyle(genderPicker.div);
		setLayoutStyle(birthday.div);
		var buttonRegister = E.BUTTON();
		buttonRegister.classList.add('button-register');
		styleTextInputRegister(textEmailRegister, 'Email');
		styleTextInputRegister(textUsernameRegister, 'Username');
		styleTextInputRegister(textPasswordRegister, 'Password');
		styleTextInputRegister(textPasswordReenterRegister, 'Re-enter Password');
		textUsernameGuest.onkeydown = detectEnterKey;
		textPasswordSignIn.onkeydown = detectEnterKey;
		textEmailRegister.onkeydown = detectEnterKey;
		textUsernameRegister.onkeydown = detectEnterKey;
		textPasswordRegister.onkeydown = detectEnterKey;
		textPasswordReenterRegister.onkeydown = detectEnterKey;
		buttonRegister.className='btn btn-primary';
		buttonRegister.classList.add('button-register');
		buttonRegister.innerHTML= 'Done';
		buttonEnterGuest.className='btn btn-primary';
		buttonEnterGuest.classList.add('button-register');
		buttonEnterGuest.innerHTML='Enter';
		divInputsRegister.appendChild(genderPicker.div);
		divInputsRegister.appendChild(birthday.div);
		divInputsRegister.appendChild(buttonRegister);
		divInputsRegister.classList.add('inputs-register');
		divInputsGuest.appendChild(textUsernameGuest);
		buttonRegister.onclick = sendRegister;
		styleTextInputGuest(textUsernameGuest, 'Username');
		styleTextInputSignIn(textUsername, 'Username');
		styleTextInputSignIn(textPasswordSignIn, 'Password');
		textPasswordSignIn.type = 'password';
		button.className='btn btn-primary';
		button.classList.add('button-enter');
		divError.classList.add('error');
		textError.classList.add('error-text');
		textError.readOnly = true;
		button.innerHTML = "Enter";
					function    sendRegister() {this.blur();
				if (textEmailRegister.value.length < 1)
				{
					setError("You must enter an email address!");
					return;
				}
				if (textUsernameRegister.value.length < 1)
				{
					setError("You must enter a username!");
					return;
				}
				if (textPasswordRegister.value.length < 1)
				{
					setError("You must enter a password!");
					return;
				}
				if (textPasswordReenterRegister.value.length < 1)
				{
					setError("You must re-enter your password!");
					return;
				}
				if (textPasswordRegister.value != textPasswordReenterRegister.value)
				{
					setError("The passwords entered do not match!");
					return;
				}
				showSpinner();
				var bd= birthday.getValue();
				if( !bd.year)
				{
					setError("You must enter a birth year!");
					return;
				}
				if(bd.month==undefined)
				{
					setError("You must enter a birth month!");
					return;
				}
				if(!bd.day)
				{
					setError("You must enter a birth day!");
					return;
				}
				var jObject = {email: textEmailRegister.value, username: textUsernameRegister.value, password: textPasswordRegister.value, gender:genderPicker.getValue(), birthday:bd};
				console.log('registering');
				callbackRegister(jObject);
			};

		this.setError = setError;
		buttonEnterGuest.onclick=sendGuest;
		button.onclick = sendSignIn;
		
		textUsername.onkeydown = detectEnterKey;
		textUsername.addEventListener('click', function ()
		{
			textUsername.focus();
		});var showingRegister=false;

		var tabPanel = new TabPanel(['Guest', 'Sign In', 'Register'], true);
		tabPanel.onChangeTab = function (i) {
			setError('');
			switch (i)
			{
				case 1:
					showingRegister=true;
					tabPanel.div.style.height = 'auto';
					break;
				default:
					showingRegister=false;
					tabPanel.div.style.height = 'auto';
					break;
			}
		};
		this.div.appendChild(tabPanel.div);
		tabPanel.panels[0].div.appendChild(divInputsGuest);
		tabPanel.panels[1].div.appendChild(divInputsSignIn);
		tabPanel.panels[2].div.appendChild(divInputsRegister);
		tabPanel.panels[2].div.className='dsfdsfdsf';

		
		tabPanel.div.style.height = 'auto';
		tabPanel.div.style.position = 'relative';
		//divInputsSignIn.appendChild(divTextInputs);
		divInputsGuest.appendChild(buttonEnterGuest);
		divInputsSignIn.appendChild(button);
		this.div.appendChild(divError);
		divError.appendChild(textError);
		this.div.appendChild(spinner.div);
		var flashing = false;
		var flashingCount = 0;
		var initialBackgroundColor = self.div.style.backgroundColor;
		timer = new Timer(function () {
			flashingCount++;
			if (flashing) {
				self.div.style.backgroundColor = initialBackgroundColor;
				flashing = false;
				if (flashingCount > 6)
				{
					timer.stop();
				}
			} else {
				self.div.style.backgroundColor = '#ccff00';
				flashing = true;
			}
		}, 60, -1);
		this.hide = function ()
		{
			self.div.style.display = 'none';
			settings.set("username", textUsername.value);
		};
		var username = settings.get("username");
		if (username)
		{
			textUsername.value = username;
		}
		function setLayoutStyle(element)
		{
			element.classList.add('entry');
		}function showSpinner()
		{
			spinner.show();
			spinner.center();
		}
		function hideSpinner()
		{
			spinner.hide();
		}
		function sendSignIn() {
			this.blur();
			showSpinner();
			callbackSignIn({password : textPasswordSignIn.value,username :textUsername.value});
		}
		function sendGuest(){
			this.blur();
			showSpinner();
			callbackGuest({username :textUsername.value});
		}
		function detectEnterKey(evt) {
			evt = evt || window.event;
			if (evt.keyCode == 13)
			{
				(showingRegister?sendRegister:sendSignIn)();
			}
		}
		function styleTextInputGuest(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder = placeholder;
			divInputsGuest.appendChild(txt);
		}
		function styleTextInputSignIn(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder = placeholder;
			divInputsSignIn.appendChild(txt);
		}
		function styleTextInputRegister(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder=placeholder;
			divInputsRegister.appendChild(txt);
		}
		function setError(error)
		{
			if (error)
			{
				hideSpinner();
				divError.style.display = 'inline';
				textError.innerHTML = error;
			} else
			{
				divError.style.display = 'none';
			}
		}
	};
	var authenticate;
	_Authenticate.acquire = function (params)
	{
		if (!authenticate)
			authenticate = new Authenticate(params);
		document.body.appendChild(authenticate.div);
	};
	_Authenticate.hide = function ()
	{
		if (authenticate)
		{
			authenticate.hide();
		}
	};
	_Authenticate.error = function (message)
	{
		if (authenticate)
		{
			authenticate.setError(message);
		}
	};
	return _Authenticate;
})();