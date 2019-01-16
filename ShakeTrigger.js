#pragma strict

private var camerashake : CameraShake;

function Start () 
{
	camerashake = GameObject.Find("Main Camera").GetComponent(CameraShake);
}

function OnTriggerEnter (Col : Collider)
{
	if(Col.tag == "Player")
	{
		camerashake.CameraShake();
		yield WaitForSeconds(5);
		Destroy(gameObject);
	}
}