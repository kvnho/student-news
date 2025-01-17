import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import SmallHeader from '../../components/Headers/SmallHeader';
import LargeHeader from '../../components/Headers/LargeHeader';
import LinkList from '../../components/Link/LinkList';

const News = (props) => {
	return (
		<IonPage>
			<SmallHeader title='Student News' />
			<IonContent fullscreen>
				<LargeHeader title='Student News' />
				<LinkList location={props.location} />
			</IonContent>
		</IonPage>
	);
};

export default News;
