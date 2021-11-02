import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI} from './requestsAPI/requestsAPI';


function Request() {

    const [checked, setChecked] = useState<boolean>(false)
    const [status, setStatus] = useState<string>()
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    const onClickRequest = () => {
        requestsAPI.testPost(checked)
            .then(res => setStatus(`${res.data.errorText},  ${res.data.info}`))
            .catch(error => setStatus(`${error.response.data.errorText},  ${error.response.data.info}`))
    }
    return (
        <div>
            <SuperButton onClick={onClickRequest}>
                Request
            </SuperButton>
            <SuperCheckbox checked={checked} onChange={testOnChange}/>

            <div>{status}</div>
        </div>
    );
}

export default Request;
