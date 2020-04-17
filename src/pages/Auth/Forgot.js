import React from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton } from '@ionic/react';
import NavHeader from '../../components/Headers/NavHeader';

const Forgot = () => {
	return (
		<IonPage>
			<NavHeader title='Log In' />
			<IonContent>
				<IonItem lines='full'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput name='email' type='text' required></IonInput>
				</IonItem>

				<IonRow>
					<IonCol>
						<IonButton type='submit' color='primary' expand='block'>
							Get Password Reset Link
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Forgot;
