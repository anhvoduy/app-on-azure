
export const fetchSPAccessToken = async () => {
  try 
  {
    let uri = 'https://accounts.accesscontrol.windows.net/d4961f1b-d80d-475b-a3c3-7d09b24bd5d2/tokens/OAuth/2';

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "esctx=AQABAAAAAAB2UyzwtQEKR7-rWbgdcBZItLdIQ-cRCxTTxOZ4UmwsyVOi4cRuc47EunoQM6vGNHYu-aseTWqAumf14zHmXr4qGm8-2j112wYifKA-TiR4hgMpTh4OORvGvF_vid-cvD8QOCzRdzfXUPE6wR_Htuu5ZB8NbHp3arsyXSykTDYsqDQdNl_YiTG4_PTkQtrpJi4gAA; stsservicecookie=estsfd; x-ms-gateway-slice=prod; fpc=AuZzeGFWqKBDlrZ4IDb2__un6GOaBwAAAFzja9cOAAAAybLMgQIAAABc4WvXDgAAANb0UiIBAAAAMuRr1w4AAAA");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "5ca2f988-4d5f-49f8-be14-cdc63f0cce99@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2");
    urlencoded.append("client_secret", "mgJ9PfILUEpJClCeSAF8aEI3oM8ul4GyRm30vaQ7xt4=");
    urlencoded.append("Resource", "00000003-0000-0ff1-ce00-000000000000/development365.sharepoint.com@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    fetch(uri, requestOptions)
    .then((res) => {
      console.log(res.text());
    })
    .catch((err) => {
      console.log(err);
    });
    return [];
  }
  catch (err) {
    throw err;
  }
}