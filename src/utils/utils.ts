import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
	webClientId:
	  "300055833730-43a3j5uq78488unu9ui3o0p2710gdocf.apps.googleusercontent.com",
  });

export const onGoogleButtonPress = async () => {
	// Check if your device supports Google Play
	await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
	// Get the users ID token
	const { idToken } = await GoogleSignin.signIn();

	// Create a Google credential with the token
	const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	// Sign-in the user with the credential
	return auth().signInWithCredential(googleCredential);
}