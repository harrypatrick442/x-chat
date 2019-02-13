var Authenticate = (function(){
	var _Authenticate = function (params)
	{
		var callbackRegister = params.callbackRegister;
		var callbackSignIn = params.callbackSignIn;
		var callbackGuest = params.callbackGuest;
		var enablePassword = (callbackRegister != undefined);
		var self = this;
		var spinner = new Spinner({preventInterraction:true});
		var settings = new Settings("#username", function () {
			this.set("username");
			//this is a reset function for this particualr instance of this particular class.
		});
		this.div = E.DIV();
		var divInner = E.DIV();
		var divInputsSignIn = E.DIV();
		var divInputsRegister;
		var divInputsGuest = E.DIV();
		//var divTextInputs = document.createElement('div');
		var textUsername = E.TEXT();
		var tickboxStaySignedIn = new Tickbox({text:'Stay signed in'});
		var tickboxStaySignedInGuest = new Tickbox({text:'Stay signed in'});
		var textPasswordSignIn = E.PASSWORD();
		var textPasswordRegister = E.PASSWORD();
		var textPasswordReenterRegister = E.PASSWORD();
		var textEmailRegister = E.TEXT();
		var textUsernameRegister = E.TEXT();
		var tickboxStaySignedInRegister = new Tickbox({text:'Stay signed in'});
		var textUsernameGuest = E.TEXT();
		var button = new Button({classNames:['button-register'], text:'Enter'});
		var buttonEnterGuest = new Button({classNames:['button-register'], text:'Done'});
		var divError = E.DIV();
		var textError = E.TEXTAREA();
		//spinner.hide();
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
		var buttonRegister = new Button({classNames:['button-register'], text:'Done'});
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
		divInputsRegister.appendChild(genderPicker.getElement());
		divInputsRegister.appendChild(birthday.getElement());
		divInputsRegister.appendChild(tickboxStaySignedInRegister.getElement());
		divInputsRegister.appendChild(buttonRegister.getElement());
		divInputsRegister.classList.add('inputs-register');
		divInputsGuest.appendChild(textUsernameGuest);
		buttonRegister.addEventListener('click',  sendRegister);
		styleTextInputGuest(textUsernameGuest, 'Username');
		styleTextInputSignIn(textUsername, 'Username');
		styleTextInputSignIn(textPasswordSignIn, 'Password');
		textPasswordSignIn.type = 'password';
		divError.classList.add('error');
		textError.classList.add('error-text');
		textError.readOnly = true;
		button.innerHTML = "Enter";

		this.setError = setError;
		buttonEnterGuest.addEventListener('click', sendGuest);
		button.addEventListener('click', sendSignIn);
		
		textUsername.onkeydown = detectEnterKey;
		textUsername.addEventListener('click', function ()
		{
			textUsername.focus();
		});
		const Showings={Guest:0, SignIn:1, Register:2};
		var showing = Showings.Guest;
		var tabPanel = new TabPanel(['Guest', 'Sign In', 'Register'], true);
		tabPanel.onChangeTab = function (i) {
			setError('');
			switch (i)
			{
				case 1:
					showing=Showings.SignIn;
					break;
				case 2:
					showing = Showings.Register;
					break;
				default:
					showing= Showings.Guest;
					break;
			}
		};
		this.div.appendChild(tabPanel.div);
		tabPanel.panels[0].div.appendChild(divInputsGuest);
		tabPanel.panels[1].div.appendChild(divInputsSignIn);
		tabPanel.panels[2].div.appendChild(divInputsRegister);
		tabPanel.panels[2].div.className='panel';

		
		tabPanel.div.style.height = 'auto';
		tabPanel.div.style.position = 'relative';
		//divInputsSignIn.appendChild(divTextInputs);
		divInputsGuest.appendChild(tickboxStaySignedInGuest.getElement());
		divInputsGuest.appendChild(buttonEnterGuest.getElement());
		divInputsSignIn.appendChild(tickboxStaySignedIn.getElement());
		divInputsSignIn.appendChild(button.getElement());
		this.div.appendChild(divError);
		divError.appendChild(textError);
		var flashing = false;
		var flashingCount = 0;
		var initialBackgroundColor = self.div.style.backgroundColor;
		var username = settings.get("username");
		if (username)
		{
			textUsername.value = username;
		}
		spinner.show();
		this.hide = function ()
		{
			self.div.style.display = 'none';
			settings.set("username", textUsername.value);
		};
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
		function sendRegister() {
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
			var jObject = {email: textEmailRegister.value, username: textUsernameRegister.value,
			password: textPasswordRegister.value, gender:genderPicker.getValue(), birthday:bd,
			staySignedIn:tickboxStaySignedInRegister.getTicked()};
			callbackRegister(jObject);
		}
		function sendSignIn() {
			showSpinner();
			callbackSignIn({password : textPasswordSignIn.value,username :textUsername.value,
				staySignedIn:tickboxStaySignedIn.getTicked()});
		}
		function sendGuest(){
			showSpinner();
			callbackGuest({username :textUsernameGuest.value, staySignedIn:tickboxStaySignedInGuest.getTicked()});
		}
		function detectEnterKey(evt) {
			evt = evt || window.event;
			if (evt.keyCode == 13)
			{
				switch(showing){
					case Showings.Guest:
						sendGuest();
						break;
					case Showings.SignIn:
						sendSignIn();
						break;
					default:
						sendRegister();
						break;
				}
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