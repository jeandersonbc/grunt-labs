Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.define :dev do |dev_config|
    dev_config.vm.network "private_network", ip: "192.168.10.10"
    dev_config.vm.hostname = "dev"
    dev_config.vm.provision "shell", path: "./bootstrap.sh"
  end
end
