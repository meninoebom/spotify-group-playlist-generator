def get_state(backend, details, response, *args, **kwargs):
    # print dict(backend.get_user_details(response), **details)
    state = kwargs.get('request').get('state')

    print(state)

    return {}
