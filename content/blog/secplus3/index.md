---
title: Security+ Study Guide Ch. 3
date: "2020-11-04T22:12:03.284Z"
description: "Third chapter of my Security+ Study Guide"
---

<div class="sidebar--wrapper">
<div class="sidebar">
    <a href="#network-protocols">Networking Protocols</a>
    <a href="#remote-access">Remote Access</a>
    <a href="#allocation">Network Address Allocation</a>
    <a href="#resolution">Domain Name Resolution</a>
    <a href="#dnssec">DNSSEC</a>
    <a href="#ports">More on Ports</a>
    <a href="#switches">Network Devices</a>
    <a href="#secure-network">Securing a Network</a>
    <a href="#dmz">DMZ</a>
    <a href="#nat-pat">NAT and PAT</a>
    <a href="#network-separation">Network Separation</a>
    <a href="#proxy-servers">Proxy Servers</a>
    <a href="#utm">Unified Threat Management</a>
</div>
</div>

## Welcome back!

This is the third post in my Security+ Study Guide Notes! In this post we'll be talking about networking basics and some basic security measures to implement on your network.

`Note: These posts are in no means meant to be bite-sized content, these will be as detailed and long as I can reasonably make them without writing a whole post on each objective`

## <span class="result" id="network-tech">Network Technologies and Tools</span>

Before you can secure a network, you need to understand how that network rights! Know what you’re trying to secure first, so you can secure it in the best way possible. We’re going to talk a little about the different protocols and networking concepts you’re expected to know about for the Security+ exam, and as a reminder, this exam assumes you have at least 2 years of IT admin experience and it’s recommended you’ve taken and passed the Network+ exam. But if you don’t have either, don’t worry because neither do I! We’re just hopeful future security professionals trying to find our way through this mess together.

We’ll cover these attacks in more detail in a few more chapters but they’re relevant to the networking content now:

<span class="pink">- Sniffing Attack</span> - This is when an attacker uses a protocol analyzer to capture data sent over the network, after capturing the data, they can easily read it all in cleartext.

<span class="pink">- DoS and DDoS</span> - DoS stands for `denial of service` which is a service attack from a single source that attempts to disrupt the services provided by another system by overwhelming it. A DDoS attack is a `distributed denial of service` wherein *multiple* sources are attacking a single target. If you play online video games like WoW you’re probably already familiar with this!

<span class="pink">- Poisoning Attack</span> - Poisoning attacks attempt to corrupt the cache many protocols use to store data for temporary access in, they corrupt the cache with different data.

## <span class="result" id="network-protocols">Networking Protocols</span>
Woo! The bread and butter of this post 😀

Network protocols provide the basic rules computers need in order to communicate with each other on a network. Some of the Transmission Control Protocol/Internet Protocols such as TCP and IP provide basic connectivity. Others such as HTTP (Hypertext Transfer Protocol) and SMTP (Simple Mail Transfer Protocol) support only certain types of traffic.

Did you know that TCP/IP is actually a full suite of protocols?!

You’ll need to be aware of well-known ports used by protocols, especially when it comes to implementing ACLs in routers and stateless firewalls. Ports like 80 for HTTP for instance, just make a chart or some flashcards if this is new to you and then PRACTICE. I’ll highlight all the ports like this `80` so you can spot them better.

Now! Onto the list of basic networking protocols:

<span class="pink">- TCP</span> - This stands for Transmission Control Protocol and it provides connection-oriented traffic, it’s a guaranteed delivery by using a handshake (even during the pandemic! haha). It uses a three-way handshake process, first in order to start a TCP session, the client sends a SYN (synchronize) packet. The server then responds with a SYN/ACK (synchronize/acknowledge) packet, and the client finishes the last part of the handshake by sending an ACK packet to establish the connection. This may look a little familiar to you because we spoke about a SYN/ACK attack back in the first post.
	

		   -------> SYN ------->       

	YOU    <------SYN/ACK<----   SERVER

		   -------> ACK ------->       

<span class="pink">- UDP</span> - Stands for User Datagram Procotol, if you’ve seen the coronavirus memes lately saying all TCP applications are being converted to UDP to avoid handshakes, you may understand the difference here! TCP traffic guarantees delivery by using the handshake process, UDP doesn’t, instead it makes a best effort to deliver traffic without using extra traffic to ensure delivery. It’s common to use UDP for audio and video streaming because a little loss of data or a few packets doesn’t impact the entire experience that much. ICMP traffic also uses UDP, which is what kinds of packets are commonly sent in DoS attacks. TCP/IP traffic will either be the connection-oriented TCP or connectionless UDP.	

<span class="pink">- IP</span> - Internet Protocol identifies hosts in a TCP/IP network and delivers traffic from one host to another using IP addresses. IPv4 uses 32-bit addresses which are what most people are familiar with: `127.0.0.1`. IPv6 though uses 128-bit addresses and are in a hexadecimal code: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

<span class="pink">- ICMP</span> - This stands for Internet Control Message Protocol, you’ve used this if you’ve ever used ping, pathping, or tracert/traceroute to test connectivity.

<span class="pink">- ARP</span> - Address Resolution Protocol resolves IPv4 addresses to MAC addresses (media access control, this is the hardware or physical address essentially). TCP/IP uses the IP address to get a packet to a destination network, but once it arrives on that network, it needs to get the MAC address in order to deliver it to the correct host. ARP is required once the packet reaches the destination subnet in order to figure out which device is meant to receive that packet. `ARP poisoning attacks` use ARP packets to give clients (who initiated this exchange) false hardware address updates and then attackers use that to redirect or interrupt network traffic. Gosh darn bad guys, huh?!

<span class="pink">- NDP</span> - Neighbor Discovery Protocol performs several functions on IPv6, some similar to functions ARP performs on IPv4. It can also autoconfigure device IPv6 addresses and discovers other IPv6 devices on the network such as the address of the default gateway.

Networks don’t come out of the box automatically supporting all the available protocols, instead network admins/IT professionals/whoever is in charge identifies a need based on the organizational goal or `use case` and then enables the best protocol to meet that need. Many protocols support specific use cases, this is important for the exam! Let’s look at a few different use cases.

## <span class="result" id="voice-and-video">Voice and Video</span>

Some protocols work better than others in transporting voice and video over a network, UDP is commonly used instead of TCP. But there’s also `RTP`, Real-time Transport Protocol, for delivering audio and video over IP networks. This includes `VoIP`, Voice over Internet Protocol communications, streaming media, video teleconferencing apps like Zoom, and web-based push-to-talk features like what you have on Discord or TeamSpeak. `SRTP`, Secure Real-time Transport Protocol brings encryption, message authentication, and integrity to RTP. SRTP also helps protect the confidentiality of data from these attacks while also ensuring the integrity of the data transmissions. It protects against `replay attacks` (where an attacker captures data sent between two parties, modifies it, and then attempts to impersonate one of the parties by replaying the data). SRTP can be used for `unicast transmissions`, one person calling another, and `multicast transmissions`, one person sends traffic to multiple recipients.

## <span class="result" id="file-transfer">File Transfer</span>

When data is sent in cleartext, attackers can use a protocol analyzer to capture and read it, you may have done this if you have played around with Wireshark at all. You can protect this sensitive data by encrypting it, you know this, it’s almost all we’ve been talking about. Data-in-transit is any traffic that is sent over a network, this is commonly what we’ll be encrypting, but you can also encrypt data-at-rest, which is data that is stored on any medium.

Some use cases for transferring files are: transmitting data over the network, ensuring confidentiality when transmitting data over a network, and ensuring administrators connect to servers using secure connections.

Here are some basic protocols used for transferring data over a network, and relevant ports:

<span class="pink">- FTP</span> - File Transfer Protocol, this uploads and downloads large files to/from an FTP server. By default it transmits data in cleartext, so it’s super easy for an attacker to come in and have a nosey around using a protocol analyzer. FTP active mode uses `TCP port 21` for control signals and `TCP port 20` for data. Passive mode uses `TCP port 21` for control signals, but it uses a random TCP port for data. If FTP traffic is going through a firewall, the random port is often blocked so it’s best to disable PASV(passive) mode in FTP clients.

<span class="pink">- TFTP</span> - Trivial File Transfer Protocol, this uses `UDP port 69` and transfers smaller amounts of data, such as when communicating with network devices. Not an essential protocol on most networks, it’s commonly disabled. Also good to note that it has been used in many attacks before.

Here are some encryption protocols used to encrypt data-in-transit:

<span class="pink">- SSH</span> - Secure Shell, it encrypts traffic in transit and can be used to encrypt other protocols such as FTP. Don’t use Telnet on Linux systems because it sends traffic over the network in cleartext. Instead use SSH to remotely administer systems. `SCP`, Secure Copy, is based on SSH and is used to copy encrypted files over a network. SSH can also encrypt TCP Wrappers, which are a type of access control list used on Linux to filter traffic. When SSH encrypts traffic, it uses `TCP port 22`.

<span class="pink">- SSL</span> - Secure Sockets Layer protocol was the primary method used to secure HTTP traffic as HTTPS. SSL can also encrypt other traffic such as SMTP and LDAP. But it’s been compromised and isn’t recommended to use. Always good to know though! Look up the POODLE attack to learn more about why it’s not recommended for use. Fun fact, the US government and other organizations prohibit the use of SSL to protect any sensitive data, it’s just *that* bad.

<span class="pink">- TLS</span> - Transport Layer Security protocol is the designated replacement for SSL! Many protocols that support TLS also use STARTTLS, which is a command used to upgrade and unencrypted connection to an encrypted connection on the same port.

<span class="pink">- IPsec</span> - Internet Protocol security, this is used to encrypt IP traffic. It works by encapsulating and encrypting IP packet payloads and uses Tunnel mode to protect VPN traffic. It includes two main components: Authentication Header (`AH`) identified by protocol ID 51 and Encapsulating Security Payload (`ESP`) identified by protocol ID 50. It uses the Internet Key Exchange (`IKE`) over `UDP port 500` to create a security association for the VPN.

<span class="pink">- SFTP</span> - Secure File Transfer Protocol, this is a secure implementation of FTP. An extension of SSH by using SSH to transmit the files in an encrypted format. Uses `TCP port 22`

<span class="pink">- FTPS</span> - File Transfer Protocol Secure is an extension of FTP and uses TLS to encrypt FTP traffic instead of using SSH. Some implementations use `TCP ports 989 and 990`, but TLS can alsy encrypt the traffic over ports used by the original FTP (`20 and 21`).

## <span class="result" id="email-and-web">Email and Web</span>

The use cases relevant to email are: send and receive email, send and receive secure email, and manage email folders. The use cases relevant to the web: provide access to the Internet and provide secure access to the Internet (for internal employees), as well as provide access to web servers by external clients.

Many of the following protocols support STARTTLS. Instead of using one port to transmit data in cleartext and a second port to then transmit data in ciphertext, STARTTLS command allows the protocol to use the same port for both.

<span class="pink">- SMTP</span> - Simple Mail Transfer Protocol, this transfers email between clients and SMTP servers. Uses `TCP port 25`, unofficially used port 465 with SSL and port 587 with TLS. It’s now recommended that SMTP uses STARTTLS to initialize a secure connection.

<span class="pink">- POP3 and Secure POP3</span> - Post Office Protocol v3 transfers emails from servers down to clients. POP3 uses `TCP port 110` to receive email, secure POP3 encrypts the transmission with SSL or TLS (definitely TLS) and can use `TCP port 995`. Use STARTTLS to create a secure connection on port 110 though!

<span class="pink">- IMAP4 and Secure IMAP</span> - Internet Message Access Protocol v4. Used to store email on an email server. IMAP4 allows a user to organize and manage email in folders on the server. Gmail uses IMAP4. It uses `TCP port 143`, IMAP4 with SSL/TLS can use `TCP port 993` but please use STARTTLS instead to create a secure connection on 143.

<span class="pink">- HTTP</span> - This transmits web traffic on the internet, web servers use it to transmit web pages to clients’ web browsers. `TCP port 80`

<span class="pink">- HTTPS</span> - Encrypted web traffic. Encrypted with SSL/TLS on `TCP port 443`

## <span class="result" id="directory-services">Directory Services</span>

Network OS’s use a directory service to steamline management and implement secure access to the network. An example of such is Microsoft Active Directory Domain Services (`AD DS`). AD DS allows administrators to create user objects for each authorized user and computer objects for each authorized computer. They can then enforce identification, authentication, and authorization methods within the directory service.

A little refresher:

- Kerberos uses a Key Distribution Center to issue timestamped tickets
- LDAP is the protocol used to communicate with directories such as AD DA, it provides a clear syntax for object identification and management. LDAPS encrypts data
- Group Policy Objects are used by admins to configure settings, they can then apply the GPOs to users and computers within the domain

## <span class="result" id="remote-access">Remote Access</span>

Employees are often going to need to access company systems from remote locations, it’s just a fact of life, especially nowadays with coronavirus. I’ve been a remote employee for almost a year now, before any quarantine requirements happened. Administrator may even need remote access to interact with a remote server. They may use SSH to remotely access the server, or Netcat that is secured with SSH if they’re a Linux administrator. 

`RDP`, Remote Desktop Protocol is also often used to connect to other systems remotely. RDP can use `TCP port 3389` or` UDP port 3389`, but TCP 3389 is more common. It’s also common for port 3389 to be blocked on a host-based or network firewall.

Another way of gaining remote access to systems is through a VPN.

## <span class="result" id="time-sync">Time Synchronization</span>

A use case for this would be to ensure systems have the accurate time. There are plenty of situations where systems need to be using the same time, for example Kerberos requires all systems to be synced and be within 5 minutes of each other.

Using a Microsoft domain as an example, one domain controller within it will periodically use the Windows Time service to locate a reliable Internet server running the `NTP`, Network Time Protocol. NTP is the most commonly used protocol for time synchronization, it can syn systems within tens of milliseconds of each other. Other domain controllers within the network will periodically synchronize their time with the first domain controller (the one that reached out to the NTP), then the rest of the computers within the network will synchronize with one of these two domain controllers so everything is in sync with each other, ensuring they all have an accurate time.

## <span class="result" id="allocation">Network Address Allocation</span>

This refers to allocating IP addresses to hosts within the network. This can be done manually, but most networks will use `DHCP`, Dynamic Host Configuration Protocol, to dynamically assign the IP addresses. It can also assign other TCP/IP information, such as subnet masks, default gateways, DNS server addresses, etc. 

IPv4 has public and private IP’s. You can’t just use any public IP address, it’s assigned to you from your ISP who purchases entire ranges.

Private IPv4 address ranges:

    - 10.x.y.z 10.0.0.0 through 10.255.255.255
    - 172.16.y.z-127.31.y.z 172.16.0.0 through 172.31.255.255
    - 192.168.y.z 192.168.0.0 through 192.168.255.255

IPv6 were added by the Internet Engineering Task Force (ITETF) once the Internet Assigned Numbers Authority (IANA) assigned the last block of IPv4 addresses in February 2011. IPv6 includes 8 groups of 4 hexadecimal characters, separated by colons and each hexadecimal character is composed of 4 bits. IPv6 doesn’t use private IP addresses, instead it uses unique local addresses, these are only allocated within private networks and are not assigned to systems on the internet. Unique local addresses start with `fc00`.

## <span class="result" id="resolution">Domain Name Resolution</span>

The Domain Name System (`DNS`) is all about domain name resolution. We’ve talked a little about DNS, especially when it came to how you could use `ping` on a URL and it would be resolved to the IP address for you. DNS resolves those host names, or URLs, to IP addresses. DNS uses `UDP port 53` for its resolution queries.

DNS works like this, you type a URL into your browser, that gets sent out to a DNS server which is being queried, the browser is asking it if it knows what the IP address for that host name is. Sometimes the DNS server you query does know the answer and responds with it, other times though it has to query one or more other DNS servers to get you that IP address. When it has to query other servers, it saves that response in its cache so that it won’t have to bother the other servers again, because they’re all busy dealing with their own queries, right?! How polite. Clients (your browser) also will save the answer in their cache so they won’t have to repeat the query to the DNS server.

DNS servers host data in zones, think of a zone as a database to help understand the concept. Each zone includes multiple records that have different types.

<span class="pink">- A</span> - This is also called a `host record`. It holds the host name and IPv4 addresses and is the most commonly used record in a DNS server. During our query process we just discussed, a DNS client queries DNS with the name using a forward lookup request, and DNS responds with the IPv4 address from THIS record. Cool, right?

<span class="pink">- AAAA</span> - This record holds the host name and the IPv6 address. Basically the same as the `A` record type, but it’s IPv6

<span class="pink">- PTR</span> - No, we’re not talking about the Public Test Realm here <a href="https://www.deviantart.com/punkkitteh/art/Lillekatt-s-WoW-Emojis-1-and-2-FREE-read-rules-826508415" target="_blank" title="Link to art, this is not Discord please don’t hate me" class="gif-container">![Gif of Night Elf from World of Warcraft, emotion is funny rage](./AngryNelfNoisesIntensify.gif)</a>. PTR stands for a `pointer record`. It’s actually the *opposite* of an `A` record, instead of a DNS client querying DNS with the host name, the DNS client queries DNS with the IP address, ooOoOOooo what a twist! If the DNS server is configured to do so, it will respond with the host name. These types of records are *optional*, so reverse lookups on IP addresses won’t always work.

<span class="pink">- MX</span> - This is also called `mail exchange` or `mail exchanger`. An MX record identifies a mail server used for email. It’s linked to the `A` record or the `AAAA` record of a mail server.

<span class="pink">- CNAME</span> - This is a `canonical` name (yeah I have trouble pronouncing it as well), or `alias`, and it allows a single system to have multiple names associated with a single IP address. A server named Server1 in the domain of *nichole.is* might have an alias of FileServer1 in the same domain. It’s probably worth a quick google to look at some other examples of using CNAME and why someone would do so.

<span class="pink">- SOA</span> - This stands for `start of authority`, and it includes information about the DNS zone and some of its settings. It’ll include things like the `TTL`, Time to Live, settings for DNS records. DNS clients will use the TTL setting to determine how long to cache DNS results.

When DNS servers share information with each other, it’s a process called `zone transfer`. It usually only includes a small number of updated records, however sometimes it can include all the records in the zone. DNS servers use `TCP port 53` for *zone transfers* and `UDP port 53` for *name resolution*.

## <span class="result" id="dnssec">DNSSEC</span>

This stands for Domain Name System Security Extensions. A risk with DNS is `DNS poisoning`, or also known as DNS cache poisoning. I bet you can see where this is going. When this attack is successful, attackers modify the DNS cache with a bogus IP address, similar to the poisoning attack we discussed earlier wherein data is corrupted with different/false data, here it is in the DNS world! An attacker may want to send users to a malicious web site every time they try to visit a specific url, what they do is they modify the A or AAAA record in the DNS cache for that specific url so instead of sending users to the IP address it originated with (the non-malicious destination), the users will instead be sent to the IP address of the malicious web site. I’ve seen this in action in the wild a couple times, but of course way before I actually knew what was happening. Who knows what terrifying monsters lurk on that old machine of mine…. 🙃 DNSSEC is one of the primary methods of preventing DNS cache poisoning, it’s a suite of extensions to DNS that provides validation for DNS responses, adding a digital signature to each record that provides data integrity. If you’ve forgotten what a digital signature is, have a look at the first post in this series, <a href="http://nichole.is/secplus1/#digital-signatures" target="_blank">here</a> again. If a DNS server receives a DNSSEC-enabled response with digitally signed records, the DNS server knows that the response is valid.

#### Nslookup and Dig

These are both two command-line tools used to test DNS, Microsoft uses `nslookup`, and Linux uses `dig`. You’d use nslookup, short for name server lookup, to troubleshoot problems related to DNS, such as to verify that a DNS server can resolve specific host names or fully qualified domain names (`FQDNs`) to IP addresses. FQDNs include the host name and the domain name.

Dig is sometimes referred to as domain information groper, you can use it to query DNS servers to verify that  the DNS server is reachable and verify it can resolve names to IP addresses, just like nslookup, but the Linux replacement. You can also use it to verify that a DNS server has a host record that maps a host name to an IP address for a web server.  It verifies DNS functionality by querying DNS, verifying a record exists, and verifying that the DNS server responds.

You may be able to specify which DNS server you want to query by using the `@` symbol, but this isn’t supported in *every* version of these tools. It’s useful if you want to pull all the records from a specific DNS zone, you would use the `any` switch to indicate all records or the `axfr` switch for  all transfer. Sadly, most DNS servers are configured to block these kinds of queries though.

## <span class="result" id="subs">Subscription Services</span>

You already know this one, I’m sure you are taking part in many subscription-based business models; from WoW to Netflix. Instead of selling software applications to users, users pay over time to use them.

The protocols used for subscription services can vary, but it’s common to use HTTPS connections for security. Database servers maintain databases of customers and the services they’re renting. The connection between the web servers and these database servers should be secured with either HTTPS or TLS (remember, don’t use SSL anymore!). When the subscription is coming to an end, or the next billing cycle is due soon, users will get an automated email sent to them using SMTP.

## <span class="result" id="ports">More on Ports</span>

We’ve talked a little about ports in this post so far, but here’s some more! Ports are simply logical numbers used by TCP/IP to identify what service or application should handle the incoming data. There are a total of 65,536 TCP ports and 65,536 UDP ports (at the time of writing this). Administrators will open ports on firewalls and routers in order to allow the associated protocol traffic in or out of the network. HTTP, your typical internet traffic, uses port 80 so that traffic is allowed by opening port 80.

It’s also important to DISABLE unnecessary ports and services to maintain good security hygiene. If a port is disabled, then traffic from the protocols using those ports will also be blocked, this can help if an attacker is trying to exploit those ports, services, or protocols.

The IANA has divided the ports into three ranges:

1. Well-known ports: 0 - 1023 - IANA assigns port numbers to commonly used protocols in this range
2. Registered ports: 1024 - 49, 151 - IANA registers these for companies as a convenience to the IT community. A single company can register a port, or multiple companies can use the same port for a specific standard.
3. Dynamic and private ports: 49,152 - 65,535 - These are available for use by any application. They’re commonly used to temporarily map an application to a port, often called ephemeral ports.

Computers are receiving dozens of packets at any given time, and in each of these packets there’s a destination IP address and a destination port. TCP/IP uses the IP address to get the packet to the computer, then the computer uses the port number to get the packet to the right service/protocol/application that can process it.

80, 22, 25, 443, and are examples of `server ports`.

There are also `client ports`. TCP/IP works with the clients OS to maintain a table of client-side ports. It associates port numbers with different applications that are waiting on return traffic. These ports start at 49,152 and go up to 65,535. When your browser requests a page from a web site, your system will jot down an unused client port number such as 49,152 in the internal table to handle the return traffic. When the web server returns the requested page, it includes the client port as the destination. When the client gets the page packets with the destination port of 49,152 it sends these packets to the web browser, which then processes the packets and displays the page.

Many protocols aren’t identified with by the port like the ones we’ve discussed so far. Some are identified by the protocol number instead (sometimes you’ll see the protocol number listed as a protocol ID or identifier instead). For example, within IPsec - protocol number 50 indicates the packet is an Encapsulating Security Payload (`ESP`), and protocol number 51 indicates it’s an Authentication Header (`AH`) packet. Just as you can with a port, you can use a protocol number to block or allow traffic on routers and firewalls. You can’t allow IPsec ESP traffic by opening *port* 50 though, port 50 is a Remote Mail Checking Protocol. But you can allow IPsec traffic by allowing traffic that is using protocol number 50. Remember, you can use protocol analyzers to capture and examine the IP headers in order to see what protocol number and port is being used, as well as be able to read any unencrypted data.

## <span class="result" id="network-devices">Basic Network Devices</span>

A network connects computers and other computing devices together so users can share resources such as data, printers, and any other devices. Any device with an IP address is a host, but they’re often referred to as clients or nodes as well.

Simplified, switches are used to connect hosts together within a network, and routers are used to connect multiple networks together to create larger and larger networks… kinda like the internet! One giant mesh-network.

Primary methods IPv4 uses when addressing TCP/IP traffic:

<span class="pink">- Unicast</span> - one-to-one traffic. One host is sending traffic to another host, using a destination IP address. The host that holds the destination IP address will process the packet. Most other hosts on the network will see the packet, but they won’t process it because it isn’t addressed to them.

<span class="pink">- Broadcast</span> - one-to-all traffic. One host sends traffic to all the other hosts on the subnet using a `broadcast address` such as 255.255.255.255. Every host that receives the broadcast traffic will process it. Switches pass this broadcast traffic between their ports, routers don’t though.

## <span class="result" id="switches">Switches</span>

As we just learned above, a switch is used to connect hosts together within a network. Super simple, right? Before switches there were hubs, which were a little stupid, switches are a little smarter and more secure! I loved learning about switches, if you have the time I definitely recommend checking out NetworkChuck’s video about them <a href="https://www.youtube.com/watch?v=9eH16Fxeb9o" target="_blank">here</a> he really helps explain it in simple terms, in fact his whole free CCNA course is worth the watch! 

Think of a switch as a spider, the body of the spider is the actual switch, and all the legs are connections to all the computers on your network, in order for each spider foot to talk to another foot, they need to send their message back up the leg to the body, the body then directs the message to the destination foot.

They can learn which computers are attached to each of its physical ports, this helps create internal connections when two computers communicate with each other. When a switch is first turned on, all it knows is that it has x amount of physical ports. Let’s say the first traffic through the switch is the beginning of a TCP/IP communication between computer A and computer C. When A sends the first packet, it includes the MAC address of both the destination computer and source computer. But the switch doesn’t know which port belongs to computer C, so what does it do? It shouts into the void is what it does, just like all of humanity lately. It forwards the packet to all the ports… little rude if it was a private message. The switch logs the source MAC address of computer A in an internal table, it can then direct any future traffic addressed to A’s MAC address to port 1, and only port 1. When computer C receives the packet, it responds. In the response packet is B’s MAC address, the switch will also log this information with port 3 in the internal table. Now, any unicast traffic between A and C will only communicate between port 1 and 3, rather than all the ports on the switch. 

You need to know the basics of how a switch works, because if an attacker installed a protocol analyzer on a computer attached to another port (for our example, say it’s port 2), the protocol analyzer would not be able to capture any of the unicast traffic going through the switch to the other ports, like the communication between computers A and C. It can’t capture any data that doesn’t reach the port, it will however be able to capture any broadcast traffic. With hubs, attackers could capture the data because with hubs unicast traffic goes out to all the ports. If you haven’t caught on, that’s a security risk that switches can help mitigate over hubs. 

Keep in mind, a physical port is different from the logical ports we’ve discussed so far. A logical port is a number embedded in a packet and identifies services and protocols, a physical port is something you can plug a cable into.

#### Port Security

This limits the computers that can connect to physical ports on a switch. We already know it’s best practice to disable unused ports, right? Well, for example, say an office has wall jacks that lead to a specific physical port on a switch. If the wall jack isn’t being used, it’s best to disable the switch port, thus preventing someone from plugging in their own laptop to the wall jack and being able to connect to the network. 

Another form of port security is MAC address filtering. It’s more labor intensive, but it provides a higher level of security. You can manually configure each port to accept traffic from only a specific MAC address, limiting each port’s connectivity to a specific device, you can also just limit it to a select few MAC addresses.

#### Physical Switch Security

Physical security refers to protecting a switch by keeping it in a secure location, such as a locked wiring closet. This ensures attackers don’t have physical access to the switch or other network devices.

Switches have a console port called a `monitoring port`, administrators can use this to monitor all the traffic. Unlike the other ports on a switch we’ve learned about that only see traffic that is addressed to that port, a monitoring port can see all traffic in or out of the switch. Including any unicast traffic the switch is internally switching between two regular ports. Very sneaky, much spy. It’s useful for legit troubleshooting, but if the switch isn’t protected with any physical security, the monitoring port would also be super useful to an attacker.

#### Loop Prevention

In some terrifying instances, a network can develop a switching loop, or bridge loop, problem. If you watch NetworkChuck’s Halloween theme stream, he talks about his own experience with this when he was a newbie at one of his first jobs. It’s similar to a broadcast storm and can effectively disable a switch, so pay attention here so you don’t cause this yourself!

This can happen when a user connects two ports of a switch together with a cable, it creates a switching loop where the switch is continuously sending and resending unicast transmissions through itself. Not only can it disable the switch, it also degrades the performance of the overall network. So if you plug something into a switch port, not knowing that the other end is already plugged into that same switch. Then you close the closet and all hell breaks loose at the company, everyone’s computers are in chaos, you might want to go check that cable!

Most current switches have Spanning Tree Protocol (`STP`), or the newer Rapid STP (`RSTP`), installed and enabled for `loop prevention`. If these protocols are disabled though, the switch will still be susceptible to loop problems. Ensure your switches include loop protection, like STP and RSTP. STP also protects the network against potential attackers. Imagine an attacker has access to wall jacks, if loop protection isn’t enabled, they can connect 2 jacks together with a cable, slowing down the network performance.

#### Flood Attacks and Flood Guards

A MAC `flood attack` attempted to overload a switch with different MAC addresses associated with each physical port. Normally, only one device is ever connected to any one physical port, the switch’s internal table stores the MAC address associated with that device and maps it to the port. But, in a MAC flood attack, an attacker is sending a large amount of traffic with spoofed MAC addresses to the same port. The switch runs out of memory during a MAC flood attack to store all the MAC addresses and enters a fail-open state. Instead of the switch behaving as a switch, it behaves as a simple hub. So all traffic sent to any port of the switch is now going to be sent to ALL other switch ports. Now, an attacker can connect a protocol analyzer to any port and just gobble up all the traffic that’s being sent through the switch.

Many switches include a `flood guard` that protects against MAC flood attacks. When the flood guard is enabled, the switch will actually *limit* the amount of memory used to store MAC addresses for each port. It’s normally limited to a number that’s still more than you’d need for normal operation, and if the switch detects an attempt to store more than X entries, it’ll raise an alert. A flood guard typically sends a Simple Network Management Protocol (`SNMP`) `trap` or error message in response to the alert. It can also either disable the port or restrict updates for the port. If it disables the port, it blocks all traffic through the port. If it restricts updates, the switch will use currently logged entries for the port, but ignore any attempts to update it. 

SNMPv3 monitors and manages network devices like routers and switches. SNMPv3 agents installed on devices send information to an SNMP manager via notifications, known as `traps`. V1 had vulnerabilities like passing passwords over the network in cleartext, v2 and v3 are more secure and provide strong authentication. 

Another flood guard that’s supported on some switches is a setting for the maximum number of MAC addresses supported by a port. Most ports will tend to have this setting at 1 to support a single MAC address. But if you consider a VM running within a physical host, it can access the network using the physical host’s NIC but with the MAC address of the VM (only if the VM is set to bridged). So with this case, the maximum MAX setting should be 2. 

## <span class="result" id="routers">Routers</span>

Routers are essentially what makes the internet possible, that may be a contentious statement but imo it’s true, it’s a single network hosting billions of computers. They connect multiple networks together into a single larger network and route traffic between each segment (building block network). Segments that are separated by routers are referred to as broadcast domains. If one network has too many computers on a single segment, broadcasts can result in excessive collisions and reduce the performance. Subnetting networks creates separate broadcast domains. 

Routers don’t pass broadcasts.

Most routers are made of physical hardware, but there is routing software you can add to your computer with more than one NIC.

We’ve talked a little about ACLs, access control lists, already but they are rules that are implemented on a router (and firewalls) to identify what traffic is allowed or not. This can provide rule-based management for the router and control the traffic. Router ACLs filter packets based on IP addresses, ports, and some protocols like ICMP or IPsec.

#### Implicit Deny

`Implicit deny` indicates that all traffic that isn’t explicitly allowed, is then implicitly denied. If you don’t define the allow rules for various traffic, that traffic will be denied due to an implicit deny rule. It is the last rule in an ACL, and some devices will automatically apply it as the last rule, otherwise an administrator will manually place it at the end. The syntax varies from system to system but it might look something like `DENY ANY ANY`, or `DENY ALL ALL`, where both ANY and ALL are referring to any type of traffic. 

#### Antispoofing

Spoofing is impersonating or masquerading as someone or something else. Attackers use it quite often, and we’ve mentioned it once in the flood attack section, where attackers would use spoofed MAC addresses. When it comes to routers, attackers often will spoof the source IP address of a packet to hide the actual source. 

Antispoofing does just that. Obviously 🙃. You can implement it on a router by modifying the access list to allow or block specific IPs. As an example, private IP’s should only be used in private networks, so any incoming traffic from the internet using a private IP as the source is obviously an attempt to spoof the source IP. 

## <span class="result" id="bridges">Bridges</span>

A network bridge connects multiple networks together and can be used instead of a router in some situations. Routers direct all network traffic based on the destination IP address and a switch will direct traffic to specific ports based on the destination MAC address. A `bridge` directs traffic based on the destination MAC address as well. It can be a bridge between 2 segments of a subnet that each have their own switch, so the router will pass traffic to the bridge and the bridge will direct it to the appropriate segment. Just like how a switch is able to learn, a bridge learns which bridge segment a MAC address resides in by analyzing traffic, so it’ll send the traffic to all segments and whichever one responds as having the MAC address resident, it’ll store that information in an internal table. Future transmissions with that destination MAC address will automatically be sent to the appropriate bridge segment.

## <span class="result" id="aggregate">Aggregation Switch</span>

To aggregate is to create something larger from smaller elements. An `aggregation switch` connects multiple switches together in a network. If you were to replace the bridge with a switch, it then becomes an aggregation switch. The aggregation switch connects any number of subnets to a router, reducing the number of ports used in the router.

## <span class="result" id="Firewalls">Firewalls</span>

A firewall filters incoming and outgoing traffic for a single host or between networks. It makes sure only specific types of traffic are allowed into a network or host, and only specific types of traffic are allowed out of them. It tries to keep attackers out of the network, it can also help prevent uneducated users from downloading malicious files or doing other things that put the network at risk.

#### Host-Based and Network-Based Firewalls

A host-based firewall monitors all incoming and outgoing traffic on a single host, such as a server or personal desktop. It monitors the traffic passing through the NIC and can prevent intrusions into the computer via the NIC. There are plenty of software-based firewalls that are used like host-based firewalls. You can configure inbound rules to allow or restrict the incoming traffic and outbound rules for the outgoing traffic, we talked a little about this already earlier when discussing ACLs. 

It’s always a good idea to use personal firewalls on each system in addition to network firewalls, and never connect to a public Wi-Fi hot spot without a personal firewall enabled. 

An `application-based firewall` is software running on a system, host-based firewalls are often application-based.  A `network-based firewall` is usually a dedicated system/server with additional firewall software to monitor, filter, and log traffic. A network-based firewall will have 2 or more NICs and all traffic will pass through that firewall.

#### Stateless Firewall Rules

Stateless firewalls use rules implemented as ACLs to identify allowed and blocked traffic, similar to how a router uses rules. They use the implicit deny strategy to block all traffic that isn’t explicitly allowed. The rules within ACLs generally take this format: **Permission Protocol Source Destination Port**

<span class="pink">- Permission</span> - You’ll see this as either `PERMIT` or `ALLOW` allowing the traffic, or `DENY` to block traffic

<span class="pink">- Protocol</span> - You’ll see TCP or UDP here, if you want to block both of them use IP instead. Using ICMP blocks ICMP traffic such as ping and other diagnostics.

<span class="pink">- Source</span> - This is where you identify an IP address to allow or block the traffic FROM a single computer, or range of IP’s such as an entire subnet. You can use wildcards

<span class="pink">- Destination</span> - Identify an IP address to allow or block traffic TO a single computer, or a range of IPs such as an entire subnet. You can use wildcards here as well

<span class="pink">- Port or protocol</span> - You’ll see the well-known port such as port 80 for HTTP, some devices support codes such as www for HTTP traffic. Some systems also support the use of keywords such as eq for equal, lt for less than, and gt for greater than. So, you might see eq 80 here. 

Definitely look up and get the hang of subnet masks now, not only is it important to understand regardless, but some firewalls require you to include a subnet mask in the rule and it’s always better to have an idea of what you’re doing than having to google the same fundamental concept over and over.

#### Stateful vs Stateless

A stateful firewall actively inspects traffic and makes decisions based on the context, or state, of the traffic. It keeps track of established sessions and inspects traffic based on its state within a session, and it blocks traffic that isn’t part of an established session. If a stateful firewall detects TCP traffic without the corresponding three-way handshake, it thinks this is sus and can block it. 

Stateless firewalls pose a security risk if they have misconfigured ACLs, like if it doesn’t include an implicit deny rule, it will allow everyone and their gran into the network. 

<span class="pink">A stateless firewall blocks traffic using an ACL, and a stateful firewall blocks traffic based on the state of the packet within a session.</span>

#### Web Application Firewall

A `WAF` is a firewall that is specifically designed to protect a web application. It’s placed within a `DMZ`, demilitarized zone, between a server hosting a web application and a client. You wouldn’t use a WAF instead of a network-based firewall, instead it just adds an extra layer of protection for the web app in ADDITION to the network-based firewall. A WAF can include load-balancing features.

## <span class="result" id="secure-network">Securing a Network</span>

#### Zones and Topologies

Almost all networks have access to the internet, but they aren’t connected directly to the internet. Instead, they’re broken up into different `zones` using different `topologies`.

<span class="pink">- Intranet</span> - An intranet is an internal network (not a misspelling of internet!). People use this to communicate and share content with each other. It’s common for intranets to include web servers but it isn’t a requirement.

<span class="pink">- Extranet</span> - An extranet is a part of a network that can be accessed by authorized entities from outside of the network. Authorized entities can include authorized business partners, customers, vendors, and others.

<span class="pink">- Network perimeter</span> - this provides a boundary between the intranet and the internet, there are multiple methods of boundary protection.

## <span class="result" id="dmz">DMZ</span>

No, we’re not bordering North Korea here! The DMZ in this context is the buffered zone between a private network and the internet. Any server placed directly on the internet poses a risk of being attacked because it lacks protection. The DMZ provides a layer of protection for these internet-facing servers. Many DMZ’s have 2 firewalls, one between the DMZ and intranet and another between the DMZ and internet, creating the buffer zone. The DMZ allows access to the services hosted within the DMZ, while segmenting access to the internal network.

<a href="https://searchsecurity.techtarget.com/definition/DMZ" target="_blank">![Diagram of a DMZ placed between two firewalls, one bordering the internet and the other bordering the intranet, or private network](./dmz.png)</a>

A DMZ can host any internet-facing server such as FTP servers and VPN servers

## <span class="result" id="nat-pat">NAT and PAT</span>

`NAT` stands for Network Address Translation, and it’s a protocol that translates public IP addresses to private IP addresses and vice-versa. It’s commonly seen on an internet-facing firewall, and is commonly used for network address and port translation, also called Port Address Translation `PAT`.

If you have a wireless network at home, your router that connects you to the internet is likely running NAT. It has a few perks:

- Public IP addresses don’t need to be purchased for all clients - A family or small/medium company network can have multiple computers that access the internet through a single router running NAT. Larger companies using more bandwidth may have more than one public IP.
- NAT hides internal computers from the internet - Private IP’s are isolated from the internet. NAT provides an extra layer of protection for private computers so they aren’t as easy to attack from the internet.

NAT is *not* compatible with IPsec though.You can use IPsec to create VPN tunnels or with L2TP to encrypt VPN traffic.

<span class="pink">- Static NAT</span> - This uses a single public IP in a one-to-one mapping, mapping a private IP with a single public IP

<span class="pink">- Dynamic NAT</span> - This uses multiple public IP’s in a one-to-many mapping. Dynamic NAT decides which public IP to use based on load, if several users are connected to the internet on one public IP, NAT maps the next request to a less-used public IP

## <span class="result" id="network-separation">Network Separation</span>

Using different components to provide network separation is a good security practice. These include segregation, segmentation, and isolation. 

<span class="pink">- Segregation</span> - provides basic separation

<span class="pink">- Segmentation</span> - refers to putting traffic on different segments

<span class="pink">- Isolation</span> - indicates the systems are completely separate

#### Physical Isolation and Airgaps

`Physical isolation` ensures a network isn’t connected to another network. An example is SCADA (supervisory control and data acquisition) systems within large industrial facilities, they operate within their own network and it’s common to ensure they are isolated from any other network. If an attacker can’t reach a system from the internet, it’s more difficult to attack it! But, if it’s connected to an internal network, it’s possible for an attacker to gain access to internal computers, and then be able to access any resource on the internal network -> always make sure you know the person you’re letting in your office door behind you!

An `airgap` is a metaphor for physical isolation, indicating there is a gap of air, or buffer, between an isolated system and other systems. Many orgs use both `classified` (red) and `unclassified` (black) networks, strict rules ensure these two systems aren’t connected to each other. Some rules even require that any cable from a red network has to be physically separated from black network cables, to ensure they don’t become accidentally connected to each other. Remember, accidents happen! Just like when we discussed a broadcast storm/loop prevention. 

#### Logical Separation and Segmentation 

Remember, routers and firewalls provide a basic level of separation and segmentation. 

Routers `segment` traffic between networks by rules within ACLs, and admins use subnetting to divide larger IP ranges into smaller ranges. Then they implement rules within ACLs to block or allow traffic. 

Firewalls `separate` network traffic using basic packet-filtering rules and can also use more advanced methods to block unsavory traffic.

You can also segment traffic between logical groups of users or computers with a virtual local area network (`VLAN`), providing `logical separation`. 

#### OSI - Layer 2 vs Layer 3 Switch

We haven’t talked about the OSI model much yet, but I’ll be sure to write a post about it soon and link it here! But we’re going to delve a little into it right now. If you did watch the NetworkChuck video about switches I mentioned earlier, you should have a good understanding of what this section is about.

A traditional switch operates on Layer 2 of the Open Systems Interconnection model, it uses the destination MAC address within packets to determine the destination port and forwards broadcast traffic to all ports on the switch.

Routers operate on Layer 3 of the OSI model. They forward traffic based on the destination IP within a packet and they block broadcast traffic, slightly more advanced. 

A Layer 3 switch mimics a router and allows network admins to create VLANs. Because it forwards traffic based on the destination IP instead of the MAC address, it isn’t susceptible to ARP-based attacks.

<span class="pink">- ARP-spoofing</span> - also called ARP-poisoning, is a type of attack wherein an attacker (malicious actor) sends falsified ARP (address resolution protocol) messages over a local area network (`LAN`). It results in the linking of an attacker’s MAC address with the IP address of a legit computer or server on the network.

#### Isolating Traffic with a VLAN

A VLAN uses a switch to group several different computers into a virtual network, it separates or segments traffic logically on physical networks. You can group them based on anything such as department or job function, this provides security because you’re able to isolate the traffic between the computers in the VLAN.

A router would group different computers onto different subnets, based on physical location. So every computer in a routed segment is generally in the same location like one floor of an office building. But, a Layer 3 switch can create multiple VLANs to separate the computers based on logical needs, rather than location. A Layer 3 switch can feasible be reconfigured to add or remove computers from any VLAN. You can do things like group together employees that work in different departments but are needing to be on the same subnet for a project, or you can separate VoIP and data traffic by having a dedicated VLAN for each, or you can separate user traffic by department.

## <span class="result" id="media-gateway">Media Gateway</span>

A `media gateway` is a device that converts data from the format used on one network to the format used on another. A VoIP gateway converts telephony traffic between traditional phone lines and an IP-based network, allowing users to make and receive phone calls using VoIP equipment and the gateway translates the traffic and transmits the calls over a traditional phone line.

## <span class="result" id="proxy-servers">Proxy Servers</span>

Networks use `proxy servers` to forward requests for services like HTTP/HTTPS from clients. Proxy servers can improve performance by caching content and some can even restrict users’ access to inappropriate websites by filtering content. You may have run into the restricted area of a proxy server if you tried using something like a school-supplied wi-fi and you wanted to browse social media sites.

A proxy server is placed on the edge of the network bordering the internet and intranet and includes NAT.

Admins configure internal clients to use the proxy server for specific protocols, the proxy accepts the request, retrieves the content from the internet, and returns the data to the client. Most proxy servers only act as a proxy for HTTP and HTTPS, but they can also proxy other internet protocols like FTP.


#### Performance Caching

Proxy servers increase their performance of internet requests by caching each result received from the internet, any data they’ve cached doesn’t need to be fetched from the internet again if another request comes in for it from another client within the network. Caching is temporary storage. It could be a dedicated area of RAM, or it could be an area on a high-performance disk subsystem.

<span class="pink">Reminder: A proxy server forwards requests for services from a client, provides caching to improve performance and reduce bandwidth usage.</span>

#### Transparent vs Nontransparent

A `transparent proxy` accepts and forwards requests without modifying them, simplest to setup and provides caching.

A `nontransparent proxy` can modify or filter requests, they’re often used to restrict what users can access by using URL filters. A URL filter looks at the requested URL and chooses whether or not to allow the request. 

There are third-party companies that compile and sell lists used for URL filtering, they look at a bunch of websites and categorize them into groups typical organizations may want to block. `Anonymizers` are an example of one category, and are sites that give the illusion of privacy online. People may try to use these to bypass proxy servers, but it’s usually detected, blocked, and logged by the proxy server. `Web-based email` is another category, you may be wondering why it would be blocked! It actually can bypass the security controls on internal email servers. `Warez sites` are sites that host pirated software, movies, hacking tools, etc. When a user tries to access one of these sites, they’re presented with a warning page that can remind the employees of corporate policy and serve as a reminder they are being watched by Big Brother.  

#### Reverse Proxy 

A reverse proxy accepts requests from the internet, generally for one web server in particular. It presents itself to clients as a web server, but it’s actually forwarding the requests to the web server and serving the pages that are returned. They can be used to protect web servers. They also cache the web pages returned from the web server, just like a forward proxy server does, improving performance.

Reverse proxies can be used in front of a single web server or a farm of multiple. When it’s used with multiple, it can act as a `load balancer`. You’d place the load balancer in the DMZ to accept requests and it then forwards the requests to different servers in the web farm using a load-balancing algorithm.

#### Application Proxy

An application proxy is used for specific applications, accepting and forwarding requests to the appropriate server, and then sends the response to the original requestor. APIs are a great example of this, say you bought something online and it’s shipped via UPS, you go to check the status of the shipment. The shopping site sends a query to a UPS application proxy for the status for you, the UPS application proxy then provides the status in a response. Web-based apps exchange data this way using APIs.

## <span class="result" id="utm">Unified Threat Management</span>

`UTM` is a single solution that combines multiple security controls. The goal is to provide better security, while simultaneously simplifying management requirements, make everyone’s life better right? It can help reduce the workload of admins without risking security. 

As we’ve learned so far, we develop solutions to arising problems. When attackers began releasing malware, antivirus software was created. When they started attacking networks, we built better firewalls. When there was a need for companies to control what websites employees visited, proxies with URL filters were there. All of these solutions are great, but it’s a lot to manage for administrators because it’s so complex to manage them separately. This is a new problem that has come about, thus UTM security appliances became popular.

UTM security appliances combine the features of multiple security solutions in a single application. They may include a firewall, malware inspection, DDoS mitigation, antivirus protection, anti-spam protection, URL filtering, and content filtering. 

A common issue with UTMs is a misconfigured content or spam filter, which can lead to valid emails being blocked and allow too much spam in. 

UTM appliances are commonly placed at the network border, between the internet and intranet, allowing them to intercept and analyze all traffic to/from the internet. Placement depends on how it’s being used, if it’s being used as a proxy server it can then be placed within the DMZ.

## <span class="result">Mail Gateways</span>
A mail gateway is a server that examines all incoming and outgoing email and attempts to reduce risks associated with it. It’s placed between the email server and the internet, all mail goes through the gateway before going to the email server and it can be included within a UTM appliance. They often include data loss prevention (`DLP`) capabilities, examining outgoing email looking for confidential or sensitive information and block it. They also support encryption, encrypting all outgoing email to ensure confidentiality for the data-in-transit or only certain data based on policies.
