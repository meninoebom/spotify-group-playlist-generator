def get_state(backend, details, response, *args, **kwargs):
    state = kwargs.get('request').get('state')
    return {'state': state}
