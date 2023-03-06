export default async function ({ $auth, redirect }) {
    if ($auth.user.user_role_id != 1) {
        return redirect('/')
    }

}

//^ usage : 
/**
 * &Inside the page script just add middleware:[auth-admin].
 */