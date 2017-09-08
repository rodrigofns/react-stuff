import React, { Component } from 'react';
import Button from '../react-material-design/src/Button';
import Dialog, { DialogHeader, DialogFooter } from '../react-material-design/src/Dialog';

class Outra extends Component {
	render() {
		return (
			<Dialog id="outra">
				Texto texto<br/>
				<DialogFooter>
					<Button raised onClick={() => Dialog.close('outra')}>Fecha</Button>
				</DialogFooter>
			</Dialog>
		);
	}
}

export default class Home extends Component {
	abre1 = () => {
		Dialog.show('pop', data => {
			console.log(data)
		});
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>Hey.</p>
				<Button raised onClick={this.abre1}>Pipocar</Button>
				<Dialog id="pop" width="300px">
					<DialogHeader>Título</DialogHeader>
					Primeiro popup.<br/>
					Opções.<br/>
					<DialogFooter>
						<Button raised onClick={() => Dialog.show('outra')}>Outra</Button>{' '}
						<Button raised onClick={() => Dialog.close('pop', 'oi')}>Fecha</Button>
					</DialogFooter>
				</Dialog>
				<Outra/>
			</div>
		);
	}
}
