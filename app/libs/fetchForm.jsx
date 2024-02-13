const fetchForm = async (target) => {
  const response = await fetch('https://formsubmit.co/83bb7506c7b164e34e6f12e6f10bf08a', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify({
			_captcha: 'false',
			_template: 'table',
			_subject: 'Tu señora vió la página',
			//_honey: target[0].value,
			fecha: `La reunión será el día ${target.date} de Febrero.`,
      outfit: `El outfit de manera preferencial será ${target.outfit}.`
		}),
	})

  return response.status
}

export default fetchForm
  
