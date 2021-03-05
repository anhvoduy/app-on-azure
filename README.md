# demo-pnp
(spapp: reactjs + nodejs + pnp): on azure app service
hosted: https://demo-pnp.azurewebsites.net/

### link ref
https://www.kofrimpong.com/how-to-access-sharepoint-using-an-application-context/

SharePoint supports four rights levels in the content database. For each scope, an application can have the following rights:
- Read 
- Write
- Manage
- FullControl
These rights correspond to the default user permission levels of SharePoint: Reader, Contributor, Designer, and Full Control.

SharePoint supports four different permission scopes within the content database and tenancy.
  Scope             Scope URI                                           Description
- Tenancy	        http://sharepoint/content/tenant	                The tenancy where the add-in is installed. Includes all children of this scope.
- Site Collection	http://sharepoint/content/sitecollection	        The site collection where the add-in is installed. Includes all children of this scope.
- Website	        http://sharepoint/content/sitecollection/web	    The website where the add-in is installed. Includes all children of this scope.
- List              http://sharepoint/content/sitecollection/web/list   When the user who installs the add-in is prompted to grant permissions, the dialog enables the user to select one list to which the add-in is granted permissions.

### Special Permissions
# Site Collection:
<AppPermissionRequests AllowAppOnlyPolicy="true">
   <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl"/>
   <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/>
</AppPermissionRequests>


# Search Service: 
Because the search service crawls all the data in the tenant, coupled with the fact that users should only see results that they have permissions to access, you cannot use AllowAppOnlyPolicy. Also, there is only one permission scope, QueryAsUserIgnoreAppPrincipal
- <AppPermissionRequests AllowAppOnlyPolicy="false">  
-    <AppPermissionRequest Scope="http://sharepoint/search" Right="QueryAsUserIgnoreAppPrincipal" />
- </AppPermissionRequests>

# Taxonomy:
Only read and write permission can be granted and it supports app only permissions.

<AppPermissionRequests AllowAppOnlyPolicy="true">  
   <AppPermissionRequest Scope="http://sharepoint/taxonomy" Right="Read" />
</AppPermissionRequests>

# Business Sonnectivity Service
Supports only read access.

<AppPermissionRequests AllowAppOnlyPolicy="true">  
   <AppPermissionRequest Scope="http://sharepoint/bcs/connection" Right="Read" />
</AppPermissionRequests>

# User Profiles
Supports Read, Write, Manage and FullControl rights.

"
<AppPermissionRequests AllowAppOnlyPolicy="true">  
   <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="Read" />
</AppPermissionRequests>
"
