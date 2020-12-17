# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Step to get sharepoint token
link https://www.c-sharpcorner.com/blogs/setting-for-sharepoint-online-to-accessible-from-external-environment

# Retrieve the Tenant ID: https://<sitename>/sharepoint.com/_vti_bin/client.svc/
https://development365.sharepoint.com/_vti_bin/client.svc/
Method = GET

Headers:
Key                   Syntax                Value
Authorization         Bearer                Bearer

Response:
WWW-Authenticate: Bearer realm="d4961f1b-d80d-475b-a3c3-7d09b24bd5d2",client_id="00000003-0000-0ff1-ce00-000000000000",trusted_issuers="00000001-0000-0000-c000-000000000000@*,D3776938-3DBA-481F-A652-4BEDFCAB7CD8@*,https://sts.windows.net/*/,00000003-0000-0ff1-ce00-000000000000@90140122-8516-11e1-8eff-49304924019b",authorization_uri="https://login.windows.net/common/oauth2/authorize"

WWW-Authenticate: Bearer realm="d4961f1b-d80d-475b-a3c3-7d09b24bd5d2",client_id="00000003-0000-0ff1-ce00-000000000000",trusted_issuers="00000001-0000-0000-c000-000000000000@*,D3776938-3DBA-481F-A652-4BEDFCAB7CD8@*,https://sts.windows.net/*/,00000003-0000-0ff1-ce00-000000000000@90140122-8516-11e1-8eff-49304924019b",authorization_uri="https://login.windows.net/common/oauth2/authorize"

# Generate the Access Token
https://accounts.accesscontrol.windows.net/d4961f1b-d80d-475b-a3c3-7d09b24bd5d2/tokens/OAuth/2
Method = POST

Headers:
Key                   Syntax                                           Value
Content-Type          application/x-www-form-urlencoded                application/x-www-form-urlencoded

Body: x-www-form-urlencoded
Key                   Syntax                                           Value
grant_type            client_credentials                               client_credentials
client_id             ClientID@TenantID                                4b4276d0-74cd-4476-b66f-e7e326e2cb93@10267809-adcb-42b6-b103-c7c8190b3fed
client_secret         ClientSecret                                     nuC+ygmhpadH93TqJdte++C37SUchZVK4a5xT9XtVBU=
Resource              resource/SiteDomain@TenantID                     00000003-0000-0ff1-ce00-000000000000/spsnips.sharepoint.com@10267809-adcb-42b6-b103-c7c8190b3fed

grant_type            client_credentials                               client_credentials
client_id             ClientID@TenantID                                5ca2f988-4d5f-49f8-be14-cdc63f0cce99@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2
client_secret         ClientSecret                                     mgJ9PfILUEpJClCeSAF8aEI3oM8ul4GyRm30vaQ7xt4=
Resource              resource/SiteDomain@TenantID                     00000003-0000-0ff1-ce00-000000000000/development365.sharepoint.com@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2

Response:
{
    "token_type": "Bearer",
    "expires_in": "86399",
    "not_before": "1608117255",
    "expires_on": "1608203955",
    "resource": "00000003-0000-0ff1-ce00-000000000000/development365.sharepoint.com@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2",
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZGV2ZWxvcG1lbnQzNjUuc2hhcmVwb2ludC5jb21AZDQ5NjFmMWItZDgwZC00NzViLWEzYzMtN2QwOWIyNGJkNWQyIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGQ0OTYxZjFiLWQ4MGQtNDc1Yi1hM2MzLTdkMDliMjRiZDVkMiIsImlhdCI6MTYwODExNzI1NSwibmJmIjoxNjA4MTE3MjU1LCJleHAiOjE2MDgyMDM5NTUsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAZDQ5NjFmMWItZDgwZC00NzViLWEzYzMtN2QwOWIyNGJkNWQyIiwibmFtZWlkIjoiNWNhMmY5ODgtNGQ1Zi00OWY4LWJlMTQtY2RjNjNmMGNjZTk5QGQ0OTYxZjFiLWQ4MGQtNDc1Yi1hM2MzLTdkMDliMjRiZDVkMiIsIm9pZCI6Ijk2MWI5YzM2LTQyYTctNGQ4Yy05ZTg4LTRjMGIxNzczMWYwNiIsInN1YiI6Ijk2MWI5YzM2LTQyYTctNGQ4Yy05ZTg4LTRjMGIxNzczMWYwNiIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.lnXA4eosIdzK0FbDnboUvyhEfZtVn1Q2uWC_RdFzpgD2QcwCkVwWLPaz20oepVA0F-OyBB6K_7fqzBWJ74Y0ePMw_HzdrfteCgC4ZFdE5Htm1qJ56bH849OFbURwr0dky6NTbZjyX4UOAC1vvgjmOcnofsvlgOIUxuEDSDW9DoOax__64l35DfLA5a56_Rv1XOymhCebdXw5-huHgZWZABZQhRLJHlysuMI0H56U3gD8tQCag3gzsaqH6c85JfvbXzjrLzDa1mG2Bnlsrdt16iGBaV7ZuuLyqgx9Pf2iH6ocUADk14NF1CJElqaQiZ20j-BLyaLDNVFsbfUx4ajoGQ"
}

