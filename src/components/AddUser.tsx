import { createSignal } from 'solid-js'
import { JSX, type Component } from 'solid-js'

const AddUser: () => JSX.Element = () => {
	const [login, setLogin] = createSignal('')
	const [password, setPassword] = createSignal('')
	const [checkbox1, setCheckbox1] = createSignal(false)

	const handleSubmit = (e: Event) => {
		e.preventDefault()
		console.log({
			login: login(),
			password: password(),
			checkbox1: checkbox1(),
		})
	}

	return (
		<div class='container'>
			<div class='row'>
				<div class='col-md-offset-3 col-md-6'>
					<form
						class='form-horizontal bg-white pb-10 text-center border-spacing-0 rounded-3xl '
						onSubmit={handleSubmit}
					>
						<span class='heading block text-3xl py-8 font-bold border-b-2 border-s-black mb-7'>
							АВТОРИЗАЦИЯ
						</span>
						<div class='form-group y-0 px-14 mb-10 relative'>
							<input
								type='email'
								class='form-control bg-slate-100 rounded-full border-none shadow-none pl-20 h-16'
								id='inputEmail'
								placeholder='Логин'
								onInput={e => setLogin(e.currentTarget.value)}
							/>
							<i class='fa fa-user absolute top-3 left-16 text-gray-400 text-lg transition-all duration-500'></i>
						</div>
						<div class='form-group help px-14 mb-10 relative'>
							<input
								type='password'
								class='form-control bg-slate-100 rounded-full border-none shadow-none pl-20 h-16'
								id='inputPassword'
								placeholder='Пароль'
								onInput={e => setPassword(e.currentTarget.value)}
							/>
							<i class='fa fa-lock absolute top-3 left-16 text-gray-400 text-lg transition-all duration-500'></i>
						</div>
						<div class='form-group px-14 mb-4 relative'>
							<div class='main-checkbox '>
								<input
									type='checkbox'
									id='checkbox1'
									checked={checkbox1()}
									onChange={e => setCheckbox1(e.currentTarget.checked)}
								/>
								<label for='checkbox1'></label>
							</div>
							<span class='text ml-2 leading-5 pt-1 text-capitalize'>
								Запомнить
							</span>
							<button
								type='submit'
								class='btn btn-default float-right text-white bg-cyan-800 rounded-full py-2 px-6 text-sm transition-all duration-500'
							>
								Вход
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddUser
